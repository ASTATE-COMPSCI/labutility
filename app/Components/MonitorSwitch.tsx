'use client'

import { useEffect, useState } from "react";
import { getMonitorPlugState, toggleMonitors } from "./actions";
import { Box, Paper, Switch, Typography } from "@mui/material";
import MonitorIcon from '@mui/icons-material/Monitor';

export default function MonitorSwitch()
{
    const [checked, setChecked] = useState(false)

    useEffect(()=>
    {
        const loadMonitorState = async () => {
            const initialMonitorState = await getMonitorPlugState();
            setChecked(initialMonitorState);
        }
        loadMonitorState();
    }, [])

    const handleToggle = async ()=>
    {
        await toggleMonitors();
        setChecked(!checked)
    }
  
  return (
    <Paper 
        elevation={0}
        onClick={handleToggle}
        sx={{
            p: 6,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            minWidth: 240,
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'action.hover',
            }
        }}
    >
        <Box 
            sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            gap: 3,
            }}
        >
            <MonitorIcon 
                sx={{ 
                    color: 'text.secondary',
                    fontSize: 48
                }} 
            />
            <Typography 
                variant="h6" 
                sx={{ 
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: '1.125rem'
                }}
            >
                Monitors
            </Typography>
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                }}
            >
                <Typography 
                    variant="body2" 
                    sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.95rem'
                    }}
                >
                    {checked ? 'On' : 'Off'}
                </Typography>
          
                <Switch 
                    checked={checked} 
                />
            </Box>
        </Box>
    </Paper>
  )
}