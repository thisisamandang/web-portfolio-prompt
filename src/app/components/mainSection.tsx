"use client";
import React, { useState } from "react";
import PromptInput from "./promptInput";
import NavDialog from "./navDialog";
type Props = {};

const MainSection = (props: Props) => {
  const [dialog, setDialog] = useState<boolean>(false);

  return (
    <div className=" text-6xl relative flex flex-col  items-center justify-center overflow-hidden grow">
      <h1 className="text-[#025a4e] text-center tracking-wide	 font-sans text-6xl md:text-8xl font-black">
        Hey, I&apos;m Aman
      </h1>

      <p className="font-mono mt-5 text-center  text-[#025a4e] text-lg  font-light md:text-xl ">
        an aspiring software engineer
      </p>

      <p className="font-mono text-center  text-[#025a4e]  text-lg  font-light md:text-xl ">
        I aim to build pixel-perfect, accessible products for the web and
        beyond.
      </p>
    </div>
  );
};

export default MainSection;
