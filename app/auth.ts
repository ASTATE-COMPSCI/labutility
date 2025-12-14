'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export async function isLoggedIn()
{
    const cookieStore = await cookies();
    const apiToken = cookieStore.get('apiToken')?.value

    if (!apiToken) return false;
    if (apiToken !== process.env.API_TOKEN)
    {
        await cookieStore.delete('apiToken');
        return false;
    }

    return true;
}

export async function authenticate()
{
    if (!(await isLoggedIn())) redirect('/')
}