import React from "react";

const testPromise = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2000);
    }, 2000);
  });
};

const StreamingComponent1 = async () => {
  const result = await testPromise();
  return <div>StreamingComponent1 {result}</div>;
};

export default StreamingComponent1;
