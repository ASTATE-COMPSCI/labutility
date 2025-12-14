'use client'

import { useState } from "react";
import { loginUser } from "./actions"
import { Alert, Box, Button, Paper, TextField } from "@mui/material";

export function LoginForm()
{
    const [password, setPassword] = useState<string>("");
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => 
    {
        setShowAlert(false);
        e.preventDefault();

        await loginUser(password.trim())
        setShowAlert(true);
    }

    return (
        <>
            
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    marginTop: '-20vh'
                }}
            >
                <Paper sx={{p: 5, width: '50%'}} elevation={5}>
                    {showAlert && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Invalid Password
                </Alert>
            )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Password"
                            id="password"
                            type="password" 
                            onChange={(e)=>setPassword(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" type="submit" fullWidth color="primary">Submit</Button>
                    </form>
                </Paper>
            </Box>
        </>
    )
}