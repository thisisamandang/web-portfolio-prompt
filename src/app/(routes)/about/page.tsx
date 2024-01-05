import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="md:w-full relative flex mt-16 mb-6 md:mt-2 md:mb-16 justify-center  md:grow">
        <h1 className="text-[#025a4e]  tracking-wide font-sans text-6xl md:text-8xl font-black">
          I&apos;m Aman.
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center mx-8">
        <div className="flex-1 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-[#025a4e]   tracking-wide	 font-sans text-4xl md:text-6xl font-medium">
            I&apos;m a senior year computer science student from India.
          </h1>
          <p className="font-mono text-[#025a4e]">
            In 2019, I took on a project to create a reservation system for my
            high school and tumbled head first into the rabbit hole of coding,
            eventually steering me towards a major in computer science. Since
            then, I&apos;ve worked with various technologies and joined multiple
            hackathons.
          </p>
          <p className="font-mono text-[#025a4e]">
            My focus is on creating practical and valuable products, all while
            constantly learning new things in the ever-evolving world of
            technology. This fascination with the binary world keeps me engaged
            and motivated.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">Hello</div>
      </div>
    </div>
  );
};

export default page;
