import React from "react";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { TbBrandTailwind } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="text-[#035A4E]">
      <div className="md:w-full   relative flex mt-16 mb-6 md:mt-2 md:mb-16 justify-center  md:grow">
        <h1 className="  tracking-wide font-sans text-6xl md:text-8xl font-black">
          I&apos;m Aman.
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5 items-center justify-center md:justify-normal md:items-start mx-8">
        <div className="flex-1 flex flex-col gap-5 items-center justify-center ">
          <h1 className=" tracking-wide	 font-sans text-4xl md:text-6xl font-medium">
            I&apos;m a senior year computer science student from India.
          </h1>
          <p className="font-mono ">
            In 2019, I decided to create a ticket reservation system for my high
            school project and tumbled head first into the rabbit hole of
            coding, eventually steering me towards a major in computer science.
            Since then, I&apos;ve worked with various technologies and have
            participated in multiple hackathons.
          </p>
          <p className="font-mono ">
            My focus is on creating practical and valuable products, all while
            constantly learning new things in the ever-evolving world of
            technology. This fascination with the binary world keeps me engaged
            and motivated.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5  rounded-2xl ">
          <h1 className="  tracking-wide	 font-sans text-4xl md:text-6xl font-medium">
            Technical Skills
          </h1>
          <p className="font-mono ">
            Throughout my academic journey, I&apos;ve had the opportunity to
            explore and master various languages & frameworks.
          </p>
          <div className=" glassmorphic h-1/2 p-5 flex flex-col gap-5 text-gray-700 rounded-2xl">
            <div className="flex items-center gap-5 justify-center">
              <RiJavascriptLine className="h-12 w-11 " />
              <TbBrandTypescript className="h-11 w-11 " />
              <FaGolang className="h-11 w-11  " />
            </div>
            <div className="flex items-center gap-5 justify-center">
              <FaReact className="h-11 w-11" />
              <FaNode className="h-11 w-11" />
              <TbBrandTailwind className="h-11 w-11" />
              <TbBrandNextjs className="h-11 w-11" />
              <BiLogoMongodb className="h-11 w-11" />
              <BiLogoPostgresql className="h-11 w-11" />
            </div>
            <div className="flex items-center gap-5 justify-center">
              <FaGitAlt className="h-11 w-11" />
              <FaDocker className="h-11 w-11" />
              <FaAws className="h-11 w-11" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
