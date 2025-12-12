'use client'

import { toggleMonitors } from "./actions";

export default function Home() {

  const handleToggle = async ()=>{
    await toggleMonitors();
  }
  return (
    <button onClick={handleToggle}>toggle</button>
  );
}
