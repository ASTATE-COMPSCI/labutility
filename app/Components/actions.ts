'use server'

import * as argon2 from 'argon2';
import { cookies } from 'next/headers'
import { authenticate } from '@/app/auth';

export async function loginUser(password: string)
{
    const cookieStore = await cookies();

    if (await argon2.verify(process.env.PASSWORD_HASH || "", password))
    {
        cookieStore.set('apiToken', process.env.API_TOKEN || "", { httpOnly: true })
        return true;
    }

    return false;

}

export async function getMonitorPlugState()
{
    try {
        const res = await fetch(`${process.env.STATE_MANAGER_URL}/state` || "");
        const data = await res.json();
        return (data.state === 'ON');
    } catch (err) {
        console.error('Error fetching state:', err);
        return false;
    }
}

export async function toggleMonitors() 
{
    await authenticate();

    const currentStateRes = await fetch(`${process.env.STATE_MANAGER_URL}/state`);
    const { state } = await currentStateRes.json();
    
    const newState = state === 'ON' ? 'OFF' : 'ON';
    
    await fetch(`${process.env.STATE_MANAGER_URL}/state`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: newState })
    });
    
    return true;
}