"use client";
import React, { useState, ChangeEvent } from "react";
import { GrSend } from "react-icons/gr";
type Props = {
  setDialog: (arg0: boolean) => void;
  setInputValue: (arg0: string) => void;
  inputValue: string;
};

const PromptInput = (props: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleDialog(event.target.value);
    props.setInputValue(event.target.value);
  };

  const handleDialog = (value: string) => {
    props.setDialog(value.startsWith("/"));
  };

  return (
    <div className="relative md:w-1/2 border font-mono  border-black rounded-xl mb-3 pl-4 h-16 md:px-4 flex justify-between items-center w-4/5 select-none bg-white/5 ">
      <div className="text-gray-600 absolute transform top-1/2 md:left-8 left-4 -translate-y-1/2 opacity-90">
        {props.inputValue ? null : (
          <>
            <span>Tip: Press </span>{" "}
            <span className=" border-[1px] border-gray-600 text-xs w-5 h-2 rounded-sm mx-1 px-1.5 md:py-0.5 py-1">
              /
            </span>{" "}
            <span>for Menu</span>
          </>
        )}
      </div>
      <form className="w-full h-16 gradient-border text-white relative">
        <input
          type="text"
          className="outline-none transform absolute bg-transparent text-black brightness-150 top-1/2 md:left-4 -translate-y-1/2 w-[90%] max-lg:w-[80%]"
          name="prompt"
          value={props.inputValue}
          onChange={handleChange}
        />
        <div className="absolute transform -translate-y-1/2 top-1/2 right-5">
          <button
            className="gradient-border-color hover:bg-white/10 transform hover:scale-110 transition-all duration-300 ease-in-out p-2 rounded-lg text-gray-600 hover:brightness-150 hover:text-div-purple"
            type="submit"
          >
            <GrSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PromptInput;
