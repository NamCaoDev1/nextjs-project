"use client";

import React, { use } from "react";

const testPromise = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4000);
    }, 4000);
  });
};

const StreamingClient = () => {
  const result = use(testPromise());
  return <div>StreamingClient {result}</div>;
};

export default StreamingClient;
