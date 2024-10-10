import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Profile } from "../page";

interface ProfileFormTabProps {
  defaultValues: Profile;
}

const ProfileFormTab: React.FC<ProfileFormTabProps> = ({ defaultValues }) => {
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
          <Input id="name" defaultValue={defaultValues.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue={defaultValues.email} />
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
