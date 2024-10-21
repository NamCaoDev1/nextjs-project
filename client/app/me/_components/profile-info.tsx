import envConfig from "@/app/config";
import { getSession } from "@/lib/normal-auth";
import React from "react";
import Image from "next/image";

const ProfileInfo = async () => {
  const sessionCookie = await getSession();
  const profileRes = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
    {
      headers: {
        Authorization: `Bearer ${sessionCookie}`,
      },
    }
  ).then((res) => res.json());
  return (
    <>
      <Image
        src="/images/placeholder.webp?height=40&width=40"
        alt="Profile picture"
        className="rounded-full"
        width={40}
        height={40}
      />
      <div>
        <h1 className="text-xl font-semibold">{profileRes.data.name}</h1>
        <p className="text-sm text-muted-foreground">{profileRes.data.email}</p>
      </div>
    </>
  );
};

export default ProfileInfo;
