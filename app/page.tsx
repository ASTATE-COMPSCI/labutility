'use client'

import { useState } from "react";
import { toggleMonitors } from "./actions";
import { Switch } from "@mui/material";

export default function Home() {

  const [checked, setChecked] = useState(true)
  const handleToggle = async ()=>{
    setChecked(!checked)
    await toggleMonitors();
  }
  return (
    <>
    Toggle Monitors
    <Switch checked={checked} onChange={handleToggle} />

    </>
  );
}
