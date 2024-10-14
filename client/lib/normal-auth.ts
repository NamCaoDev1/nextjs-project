import { cookies } from "next/headers";

export async function setSession(session: string, expiresAt: string) {
  // Destroy the session
  cookies().set("sessionToken", session, {
    expires: new Date(expiresAt),
    httpOnly: true,
    path: "/",
  });
}

export async function removeSession() {
  // Destroy the session
  cookies().set("sessionToken", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("sessionToken")?.value;
  if (!session) return null;
  return session;
}
