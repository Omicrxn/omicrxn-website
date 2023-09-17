import BackgroundLines from "@/components/BackgroundLines";
import Carousel from "@/components/Carousel";
import InitialCarousel from "@/components/InitialCarousel";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center items-center min-h-screen">

      {/* <h1 className="text-7xl">Omicrxn</h1> */}
      <Image
        src={"/omicrxn_logo.png"}
        width={320}
        height={70}
        alt="Omicrxn Logo"
        className="mix-blend-darken"
      />
      <InitialCarousel />
      </div>
    </main>
  );

}
