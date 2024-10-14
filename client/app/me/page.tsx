import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ProfileNav from "./_components/profile-nav";
import ProfileFormTab from "./_components/profile-form-tab";
import ProfileAccountFormTab from "./_components/profile-account-form-tab";
import ProfileNotificationTab from "./_components/profile-notification-tab";
import ProfileClient from "./_components/profile-client";
import { Suspense } from "react";
import { getSession } from "@/lib/normal-auth";
import envConfig from "../config";
// import { getSession } from "@/lib/auth";

export interface Profile {
  name: string;
  email: string;
  id: number;
}

const ProfilePage = async () => {
  const sessionCookie = await getSession();
  const profileRes = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
    {
      headers: {
        Authorization: `Bearer ${sessionCookie}`,
      },
    }
  ).then((res) => res.json());

  if (profileRes.statusCode === 401) {
    return (
      <div>
        Authenticate not yet!!{" "}
        <>
          <ProfileNav />

          <Suspense fallback="Loading profile....">
            <ProfileClient />
          </Suspense>
        </>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Profile picture"
              className="rounded-full"
              width={40}
              height={40}
            />
            <div>
              <h1 className="text-xl font-semibold">{profileRes.data.name}</h1>
              <p className="text-sm text-muted-foreground">
                {profileRes.data.email}
              </p>
            </div>
          </div>
          <ProfileNav />
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container">
          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4">
              <ProfileFormTab defaultValues={profileRes.data} />
            </TabsContent>
            <TabsContent value="account" className="space-y-4">
              <ProfileAccountFormTab />
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <ProfileNotificationTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
