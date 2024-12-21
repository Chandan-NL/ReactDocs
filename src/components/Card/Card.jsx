/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      {/* card */}
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        className=" flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-900 p-5 text-white overflow-hidden cursor-pointer"
      >
        {/* icon */}
        <FaFileAlt />

        {/* text */}
        <p className="mt-5 text-sm font-semibold text-balance">{data.desc}</p>

        {/* footer section  */}
        <div className="absolute bottom-0 left-0 w-full footer h-15 bg-zinc-900">
          <div className="flex items-center justify-between px-5 mb-5 text-white ">
            {data.fileSize}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600 bord">
              <IoMdDownload color="white" />
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
