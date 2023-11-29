import Image from "next/image";
import MainSection from "@/components/mainSection";
import SideSection from "@/components/sideSection";
export default function Home() {
  return (
    <div className="h-screen w-screen flex p-6 justify-center items-center">
      <div className="flex w-full h-full gap-4 justify-center items-center">
        <SideSection />
        <MainSection />
      </div>
    </div>
  );
}
