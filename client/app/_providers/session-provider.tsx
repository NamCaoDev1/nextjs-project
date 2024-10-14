"use client";

import { BASE_PATH } from "@/lib/auth";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

// THIS WILL WORK

export default function Providers({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={session} basePath={BASE_PATH}>
      {children}
    </SessionProvider>
  );
}
