import React from "react";

const testPromise = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(6000);
    }, 6000);
  });
};

const StreamingComponent = async () => {
  const result = await testPromise();
  return <div>StreamingComponent1 {result}</div>;
};

export default StreamingComponent;
