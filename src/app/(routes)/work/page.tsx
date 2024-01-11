import {
  ProjectWrapper,
  ProjectDescription,
  ProjectTitle,
} from "@/app/components/ProjectWrapper";
import { MdOutlineArrowOutward } from "react-icons/md";

import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  const Projects = [
    {
      title: "Github Profile Markdown Generator ",
      link: "https://thisisamandang.github.io/github-profile-markdown-generator/",
      image: "/gpmg.png",
      description:
        "A platform that simplifies the generation of Github profile markdowns, enhancing accessibility and user experience for developers.",
    },
    {
      title: "PingMe - Chat Application",
      link: "https://pingme-chat-app.netlify.app/",
      image: "/pingme.png",
      description:
        "A chat Application, Built from ground up utilizing MERN stack, and socket.io to to enable realtime messaging.",
    },
    {
      title: "Cryptish Lottery Dapp ",
      link: "https://cryptishlottery-thisisamandang.vercel.app/",
      image: "/cryptish.png",
      description:
        "A decentralized lottery application, utilizing Next.Js (TypeScript) for the front-end and Solidity for the smart contract, ensuring secure and transparent experience.",
    },
  ];

  return (
    <div className="fade-on-appear text-[#035A4E]">
      <div className="md:w-full   relative flex  mb-6   justify-center  md:grow">
        <h1 className="  tracking-wide font-sans text-6xl md:text-8xl font-black">
          Work.
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5 items-center justify-center md:justify-normal md:items-start mx-8">
        <div className="flex-1 flex flex-col gap-5 ">
          <h1 className=" tracking-wide	 font-sans text-4xl md:text-6xl font-medium">
            Experience
          </h1>
          <div className="flex items-start gap-4">
            <p className="font-mono  font-semibold">Aug 2023 - Nov 2023</p>

            <div className="font-mono flex-1 flex flex-col gap-2">
              <div className="font-bold ">
                <p className="font-sans">Heritage India Exports</p>
                <p className="font-light">
                  <em>Software Engineer Intern </em>
                </p>
              </div>
              <p>
                Spearheaded the development of a Multi-tenant NextJs
                Application, leveraging the NextJs Middleware, was also tasked
                to design and build the frontend of one of the tenants.
                Implemented Githooks with Husky to enforce pre-push and
                pre-commit checks. The codebase was made typesafe, utilising
                Typescript.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5  rounded-2xl ">
          <h1 className="  tracking-wide	md:text-right font-sans text-4xl md:text-6xl font-medium">
            Projects
          </h1>

          {Projects.map((item, index) => (
            <ProjectWrapper key={index}>
              <ProjectTitle>
                <Link
                  className="flex group gap-4 items-center justify-center"
                  href={item.link}
                  target="_blank"
                >
                  <Image
                    alt="thumbnail"
                    src={item.image}
                    width={120}
                    height={150}
                    className="rounded-sm border border-slate-600"
                  />
                  <div className="flex-col flex gap-2">
                    <div className="flex gap-2 items-center">
                      <h3>{item.title}</h3>
                      <MdOutlineArrowOutward className="transform group-hover:scale-125 transition-all duration-100" />
                    </div>
                    <ProjectDescription className="font-mono">
                      {item.description}
                    </ProjectDescription>
                  </div>
                </Link>
              </ProjectTitle>
            </ProjectWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
