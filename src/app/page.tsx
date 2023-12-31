import Image from "next/image";
import MainSection from "@/components/mainSection";
export default function Home() {
  return (
    <div className="h-screen bg-[#EDE7DE] w-screen flex p-4 justify-center items-center">
      <div className="flex w-full h-full gap-4 lg:mx-4 justify-center items-center">
        <MainSection />
      </div>
    </div>
  );
}
