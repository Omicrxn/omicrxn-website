import BackgroundLines from "@/components/BackgroundLines";
import Carousel from "@/components/Carousel";
import InitialCarousel from "@/components/InitialCarousel";
import PageWrapper from "@/components/PageWrapper";


export default async function Home() {


  
  return (
    <main >
      <div className="flex flex-row justify-center items-center min-h-screen">
        <h1 className="text-7xl">Omicrxn</h1>
        <InitialCarousel/>
      </div>
    </main>
  );
}

// <PageWrapper className="flex min-h-screen flex-col items-start justify-center bg-omi-white">
//           {/* Background grid */}
//           <BackgroundLines />
//           <Carousel />
//         </PageWrapper>
