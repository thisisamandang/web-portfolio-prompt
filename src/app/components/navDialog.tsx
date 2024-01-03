import Link from "next/link";
import React from "react";

type Props = {};

const NavDialog = (props: Props) => {
  const navLinks = [

    
    {
      title: "Work",
      link: "/work",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },

    {
      title: "Resumé",
      link: "/resume",
    },
  ];

  return (
    <div className="absolute glasmorphic md:bottom-24 bottom-10 mb-2  z-99 fade-on-appear md:w-[48vw] w-[73vw]  border font-mono  border-black rounded-xl  flex flex-col gap-4 items-start ">
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className="px-4 py-3 font-mono">
            <Link href={link.link} key={index}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDialog;
