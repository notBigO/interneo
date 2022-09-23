import React from "react";
import Image from "next/image";
import TimeIcon from "./TimeIcon";

const InternshipCard = (props) => {
  return (
    <div className="rounded-lg bg-white drop-shadow-xl w-[33rem] h-64 flex-col flex justify-start items-center px-7 py-6">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-2xl font-semibold max-w-[80%]">
          {props.info.title}
        </p>
        <Image
          className="relative top-0 right-0"
          src={props.info.icon}
          width="50"
          height="50"
        />
      </div>
      <div className="flex flex-row justify-start gap-3 items-center w-full text-slate-600 py-1 text-lg font-semibold">
        <p>{props.info.company}</p>
        <div className="flex flex-row justify-start gap-1 items-center">
          <TimeIcon />
          <p className="font-semibold">{props.info.duration}</p>
        </div>
      </div>
      <p className="pt-4">
      {props.info.description}
      </p>
      <div className="pt-6 flex flex-row justify-between items-center w-full">
        <div className="opacity-50">Via {props.info.reference}</div>
        <button className="rounded-md bg-blue-500 py-1 px-3 text-white">View More</button>
      </div>
    </div>
  );
};

export default InternshipCard;
