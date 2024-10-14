"use client";

import React, { use } from "react";

const getProfile = async () => {
  const profile = await fetch("http://localhost:3000/api/account/me").then(
    (res) => res.json()
  );
  return profile;
};

const ProfileClient = () => {
  const profile = use(getProfile());
  console.log("Profile", profile);
  return (
    <>
      <div>{profile?.data?.name || "unknown"}</div>
      <div>{profile?.data?.email || "unknown"}</div>
    </>
  );
};

export default ProfileClient;
