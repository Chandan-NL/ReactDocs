/* eslint-disable no-unused-vars */
import React from "react";

const Background = () => {
  return (
    <>
      <div className="absolute z-[2] w-full h-screen">
        <div className=" absolute top-[5%]  w-full py-10 flex justify-center text-zinc-500 text-2xl font-semibold">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter text-zinc-900 font-semibold">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
