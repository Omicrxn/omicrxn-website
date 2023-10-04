import BackgroundGrid from "@/components/BackgroundGrid";
import Contact from "@/components/Contact";
import PageWrapper from "@/components/PageWrapper";
import useInitialPageLoadAnimationStore from "@/stores/initialPageLoadAnimationStore";
import React from "react";

export default function AboutPage() {
 
  return (
    <PageWrapper
      shouldAnimate={true}
      className="flex min-h-screen flex-row items-center justify-between bg-omi-white"
    >
      <BackgroundGrid showAnimation={true}/>
      <div className="z-10">
        <h1 className="text-5xl font-semibold p-4 m-6 w-2/3">
          Hi! I&apos;m Alex
          <br /> A passionate software developer that loves building beautiful
          experiences.
        </h1>
      </div>
      <Contact/>
    </PageWrapper>
  );
}
