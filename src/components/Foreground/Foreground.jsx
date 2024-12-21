/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Card from "../Card/Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "ahbsda dahsduahda da ysdga jdgaud gau sdausdua dgaiygsda",
      fileSize: "5.0 mb",
    },
    {},
  ];

  return (
    <>
      <div
        ref={ref}
        className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
