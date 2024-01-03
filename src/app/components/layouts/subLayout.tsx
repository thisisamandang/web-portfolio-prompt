"use client";
import React, { useState } from "react";
import PromptInput from "../promptInput";
import NavDialog from "../navDialog";

type Props = {};

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const [dialog, setDialog] = useState<boolean>(false);

  return (
    <div className="h-screen bg-[#EDE7DE] w-screen flex p-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center border rounded-xl border-black h-full w-full gap-4">
      <div className="flex flex-col w-full h-full gap-4 lg:mx-4 justify-center items-center">
          <div>{children}</div>

          {dialog ? <NavDialog /> : null}
        </div>
        <PromptInput setDialog={setDialog} />
      </div>
    </div>
  );
};

export default SubLayout;
