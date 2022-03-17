import React from "react";
import { Avatar, Button, Mark } from "@mantine/core";
import Emoji from "./Emoji";

const About = () => {
  return (
    <div className=" px-12 lg:px-[160px]">
      <div className="flex ">
        <h1 className="text-4xl font-bold ">Hello woasdrld!</h1>

        {/* <Avatar
          radius="lg"
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        /> */}
      </div>

      <h1 className=" max-w-lg text-3xl mt-20 max-w-xl mt-[120px] tracking-wider ">
        I'm <Mark color="indigo">Toussaint</Mark>, a front end web developer
        based in Canada. Enjoy building interative interfaces, web apps and
        learning new technologies. Specifically anything Web3 related!
      </h1>
      <h2 className="mt-[100px] text-xl transition hover:scale-95">
        Get in touch <Emoji symbol="👉" />{" "}
        <a
          className="underline"
          href="mailto:levi.t.black.lb@gmail.com?subject = Feedback&body = Message"
        >
          levi.t.black.lb@gmail.com
        </a>
      </h2>
    </div>
  );
};

export default About;
