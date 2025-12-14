'use client'

import { Grid } from "@mui/material";
import MonitorSwitch from "@/app/Components/MonitorSwitch";

export default function Dashboard() {
  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      <Grid>
        <MonitorSwitch />
      </Grid>
    </Grid>
  );
}