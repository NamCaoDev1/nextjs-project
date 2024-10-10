import { cookies } from "next/headers";

export async function setSession(session: string, expiresAt: string) {
  // Destroy the session
  cookies().set("session", session, {
    expires: new Date(expiresAt),
    httpOnly: true,
  });
}

export async function removeSession() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}
