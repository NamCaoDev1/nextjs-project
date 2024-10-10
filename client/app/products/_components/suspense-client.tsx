"use client";

import React, { use } from "react";

const testPromise = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4000);
    }, 4000);
  });
};

const SuspenseClient = () => {
  const result = use(testPromise());
  // const data = window.localStorage.getItem('nam') || '';
  // console.log('Data', data)
  return <div>SuspenseClient {result}</div>;
};

export default SuspenseClient;
