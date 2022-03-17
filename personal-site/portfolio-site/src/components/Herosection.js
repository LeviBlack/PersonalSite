import React from "react";
import Emoji from "./Emoji";

const Herosection = ({ title }) => {
  return (
    <div className="mt-[150px] px-12">
      <h1 className="text-2xl font-bold decoration-gray-600 text-indigo-400 ml-[90px]">
        {title}
      </h1>
      <h1 className="text-xl mt-10 max-w-4xl  mx-auto tracking-wider ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi labore
        quis ducimus obcaecati voluptate nihil reprehenderit, Lorem ipsum dolor
      </h1>
      <h1 className="text-xl mt-10 max-w-4xl  mx-auto tracking-wider ">
        sit amet consectetur adipisicing elit. Sed modi labore quis ducimus
        obcaecati voluptate nihil reprehenderit, ? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed modi labore quis ducimus obcaecati
        voluptate nihil reprehenderit,
      </h1>
      <h1 className="text-xl mt-10 max-w-4xl  mx-auto tracking-wider ">
        sit amet consectetur adipisicing elit. Sed modi labore quis ducimus
        obcaecati voluptate nihil reprehenderit, ? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed modi labore quis ducimus obcaecati
        voluptate nihil reprehenderit,
        <div className="flex mt-8 transition hover:scale-105">
          <h2 className="font-semibold mr-2 underline text-lg">
            <a href="mailto:levi.t.black.lb@gmail.com?subject = Feedback&body = Message">
              {" "}
              View my resume
            </a>
          </h2>
          <Emoji symbol="👉" />
        </div>
      </h1>
    </div>
  );
};

export default Herosection;
