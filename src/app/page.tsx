import Image from "next/image";
import { GrSend } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-screen w-screen flex p-6 justify-center items-center">
      <div className="flex w-full h-full gap-4 justify-center items-center">
        <div className="bg-[#35155D] glassmorphic w-[30%] h-full flex justify-center items-center">
          left
        </div>
        <div className="flex flex-col  h-full w-full gap-4">
          <div className="w-full h-auto glassmorphic relative flex flex-row overflow-hidden grow">
            all
          </div>
          <div className="w-full border glassmorphic rounded-xl border-pink-300 h-16 px-6 flex justify-between items-center">
            <input
              placeholder="Tip: Press '/' for Menu "
              className="outline-none transform bg-transparent p-2 w-[90%] max-lg:w-[80%]"
            />

            <button className="p-2 border border-pink-300 rounded-xl">
              <GrSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {/* <div>bottom text bar</div> */}
    </div>
  );
}
