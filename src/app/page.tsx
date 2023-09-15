import BackgroundLines from "@/components/BackgroundLines";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-slate-100">
      {/* Background grid */}
      <BackgroundLines/>
      <Carousel/>
      {/* Left Text */}
      <div className=" absolute z-30 text-slate-800">
        <div className="text-7xl font-semibold">
          <h1>Beyond imagination</h1>
          <h1>Within Reach</h1>
        </div>

        <p className="text-2xl">Omicrxn - Designer & Developer</p>
      </div>
    </main>
  );
}
