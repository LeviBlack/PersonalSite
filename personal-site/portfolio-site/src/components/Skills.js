import React from "react";
import Emoji from "./Emoji";
import { FaReact } from "react-icons/fa";

const Skills = ({ title }) => {
  return (
    <div className="mt-[150px] ">
      <h1 className="text-2xl font-bold decoration-gray-600 text-indigo-400 ml-[90px] mx-auto">
        {title}
      </h1>
      <div className="flex place-content-around mt-12 max-w-lg mx-auto">
        <div className="grid col-span-4 gap-x-8 gap-y-8 ">
          <FaReact size="4em" />
          <FaReact size="4em" />
          <FaReact size="4em" />
        </div>
        <div className="grid col-span-4 gap-x-8 gap-y-8">
          <FaReact size="4em" />
          <FaReact size="4em" />
          <FaReact size="4em" />
        </div>
        <div className="grid col-span-4 gap-x-8 gap-y-8">
          <FaReact size="4em" />
          <FaReact size="4em" />
          <FaReact size="4em" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
