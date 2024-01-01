import React from "react";
import PromptInput from "./promptInput";
type Props = {};

const MainSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center border rounded-xl border-black h-full md:h-full  w-full gap-4">
      <div className=" md:w-1/2 text-6xl relative flex flex-col  items-center justify-center overflow-hidden grow">
        <h1 className="text-[#025a4e] text-center tracking-wide	 font-sans text-6xl md:text-8xl font-black">
          Hey, I&apos;m Aman
        </h1>

        <p className="font-mono mt-5 text-center text-lg text-[##4c6763] font-light md:text-xl ">
          an aspiring software engineer
        </p>

        <p className="font-mono text-center  text-lg text-[##4c6763] font-light md:text-xl ">
          I aim to build pixel-perfect, accessible products for the web and
          beyond.
        </p>
      </div>
      <PromptInput />
    </div>
  );
};

export default MainSection;
