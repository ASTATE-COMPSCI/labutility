'use server'

import { isLoggedIn } from "./auth"
import { LoginForm } from "./Components/LoginForm";
import Dashboard from "./Dashboard"

export default async function Page() {
  
  if (!await isLoggedIn()) return <LoginForm />;

  return <Dashboard />;
}