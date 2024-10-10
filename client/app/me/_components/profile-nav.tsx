"use client";

import { Button } from "@/components/ui/button";
import { Bell, LogOut, Settings } from "lucide-react";
import React from "react";
import { handleLogout } from "../_data/action";

const ProfileNav = () => {
  return (
    <nav className="flex items-center space-x-4">
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          handleLogout();
        }}
      >
        <LogOut className="h-5 w-5" />
        <span className="sr-only">Log out</span>
      </Button>
    </nav>
  );
};

export default ProfileNav;
