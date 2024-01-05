"use client";
import React, { useState } from "react";
import PromptInput from "../promptInput";
import NavDialog from "../navDialog";
import Socials from "../socials";

type Props = {};

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className=" md:h-screen bg-[#EDE7DE] w-full flex p-4 justify-center items-center">
      <div className="flex flex-col h-[90vh] w-full justify-center items-center border rounded-xl border-black md:h-full ">
        <Socials />
        <div className="flex flex-col w-full overflow-y-scroll h-full gap-4 lg:mx-4 justify-center items-center">
          <div className="w-full h-full flex  items-center justify-center">
            {children}
          </div>

          {dialog ? (
            <NavDialog
              inputValue={inputValue}
              setInputValue={setInputValue}
              setDialog={setDialog}
            />
          ) : null}
        </div>
        <PromptInput
          inputValue={inputValue}
          setDialog={setDialog}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default SubLayout;
