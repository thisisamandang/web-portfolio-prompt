"use client";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
  inputValue: string;
  setInputValue: (arg0: string) => void;
  setDialog: (arg0: boolean) => void;
};

const NavDialog = (props: Props) => {
  const navLinks = [
    {
      title: "/Work",
      link: "/work",
      target: "_self",
    },
    {
      title: "/About",
      link: "/about",
      target: "_self",
    },
    // {
    //   title: "/Contact",
    //   link: "/contact",
    //   target: "_self",
    // },
    {
      title: "/Resumé",
      link: "https://drive.google.com/file/d/1UqTVu06C0bK7UWZRehONPpc1BvSEYYwh/view",
      target: "_blank",
    },
  ];
  const filteredLinks = navLinks.filter((link) =>
    link.title.toLowerCase().includes(props.inputValue.toLowerCase())
  );

  useEffect(() => {
    if (filteredLinks.length === 0) {
      props.setDialog(false);
    }
  }, [filteredLinks, props]);

  const handleLinkClick = () => {
    props.setDialog(false);
    props.setInputValue("");
  };

  return (
    <div className="absolute bg-[#EDE7DE] md:bottom-24 bottom-[5.5rem] mb-2  z-99 fade-on-appear md:w-[48vw] w-[73vw]  border font-mono  border-black rounded-xl  flex flex-col gap-4  ">
      <ul className="w-full">
        {filteredLinks.map((link, index) => (
          <li key={index} className="px-4 py-3  font-mono">
            <Link href={link.link} key={index} target={link.target}>
              <button className="w-full text-left" onClick={handleLinkClick}>
                {link.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDialog;
