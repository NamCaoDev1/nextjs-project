"use server";

import { removeSession } from "@/lib/normal-auth";
import { redirect } from "next/navigation";

async function handleLogout() {
  await removeSession();
  redirect("/login");
}

export { handleLogout };
