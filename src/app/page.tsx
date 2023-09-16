import BackgroundLines from "@/components/BackgroundLines";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-omi-white">
      {/* Background grid */}
      <BackgroundLines/>
      <Carousel/>
      {/* Left Text */}
      
    </main>
  );
}
