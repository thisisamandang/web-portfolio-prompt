import React from "react";
import { GrSend } from "react-icons/gr";
type Props = {};

const MainSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center border rounded-xl border-black h-full md:h-full  w-full gap-4">
      <div className="w-full h-auto glassmorphic font-sans text-6xl relative flex flex-row overflow-hidden grow">
        AMAN DANG
      </div>
      <div className="md:w-1/2 border border-black rounded-xl mb-3  h-16 px-6 flex justify-between items-center">
        <input
          placeholder="Tip: Press '/' for Menu "
          className="outline-none transform bg-transparent p-2 w-[90%] max-lg:w-[80%]"
        />

        <button className="p-2  rounded-xl">
          <GrSend className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default MainSection;
