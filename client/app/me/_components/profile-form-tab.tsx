import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { getSession } from "@/lib/normal-auth";
import envConfig from "@/app/config";

const ProfileFormTab: React.FC = async () => {
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
      <div className="grid gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Profile</h2>
          <p className="text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue={profileRes.data.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue={profileRes.data.email} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            defaultValue="I'm a software developer based in San Francisco."
          />
        </div>
      </div>
      <Button>Save changes</Button>
    </>
  );
};

export default ProfileFormTab;
