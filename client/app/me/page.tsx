import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileNav from "./_components/profile-nav";
import ProfileFormTab from "./_components/profile-form-tab";
import ProfileAccountFormTab from "./_components/profile-account-form-tab";
import ProfileNotificationTab from "./_components/profile-notification-tab";
import { Suspense } from "react";
import ProfileInfo from "./_components/profile-info";

export interface Profile {
  name: string;
  email: string;
  id: number;
}

export const experimental_ppr = true;

const ProfilePage = async () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Suspense fallback="Loading profile.....">
              <ProfileInfo />
            </Suspense>
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
              <Suspense fallback="Loading profile.....">
                <ProfileFormTab />
              </Suspense>
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
