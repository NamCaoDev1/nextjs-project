"use server";

import { removeSession } from "@/lib/auth";
import { redirect } from "next/navigation";

async function handleLogout() {
  await removeSession();
  redirect("/login");
}

export { handleLogout };
