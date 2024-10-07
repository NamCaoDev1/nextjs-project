import React from "react";

const testPromise = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4000);
    }, 4000);
  });
};

const StreamingComponent2 = async () => {
  const result = await testPromise();
  return <div>StreamingComponent1 {result}</div>;
};

export default StreamingComponent2;
