import React from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type Props = {}

const Socials = (props: Props) => {

    const pathname = usePathname();

  return (
    <div className="w-full px-5 pt-2 flex justify-between">
    <div className="flex items-center justify-center gap-4">
      <Link
        href="https://www.linkedin.com/in/thisisamandang"
        target="_blank"
      >
        <FaLinkedin className="w-5 h-5" />
      </Link>
      <Link
        href="https://https://www.github.com/thisisamandang"
        target="_blank"
      >
        <VscGithubAlt className="w-5 h-5" />
      </Link>
      <Link href="https://www.twitter.com/0xamandang" target="_blank">
        <FaXTwitter className="w-5 h-5" />
      </Link>
    </div>
    {pathname == "/" ? null : (
      <>
        <Link href="/">
          <span className=" border-[1px] border-gray-600 text-xs  rounded-sm mx-1 px-1.5 md:py-0.5 py-1">
            /
          </span>
        </Link>
      </>
    )}
  </div>
  )
}

export default Socials