import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { projectImagesList } from "@/utils/projectImages";
import {
  motion,
  useAnimate,
} from "framer-motion";
import useInitialPageLoadAnimationStore from "@/stores/initialPageLoadAnimationStore";
import useCarouselStore from "@/stores/carouselStore";
export default function ProjectCard({
  index,
  className,
  isMini,
}: {
  index: number;
  className: string;
  isMini: boolean;
}) {
  const showingInitialAnimation = useInitialPageLoadAnimationStore(
    (state) => state.showingInitialAnimation
  );
  const [logoScope, logoAnimate] = useAnimate();
  const setProjectCardRef = useCarouselStore((state)=>state.setProjectCardRef);
  const projectNames = ["Double U", "Phage", "Dune", "Vasek", "JR"];
  const projectCategories = [
    "UX/UI Designer & Developer",
    "Founder",
    "Lead Developer",
    "UX/UI Designer & Developer",
    "Developer",
  ];


  useEffect(() => {
    console.log(isMini, index);

    async function animateLogo() {
      console.log(isMini, index);
      await logoAnimate(
        logoScope.current,
        { scale: 0.5, y: "-35vh" },
        { duration: 1, delay: 0.5 }
      );
    }
    if (isMini) {
      animateLogo();
    }
  }, [isMini]);

  const currentImage = projectImagesList[index];
  return (
    <div
    ref={index === 0 ? (ref) => setProjectCardRef(ref) : null}
        className={`${className} flex flex-col justify-center items-center w-full min-h-full transition-all duration-0`}
    >
      {/* BG */}
      <Image
        src={currentImage}
        alt="Project Card"
        fill={true}
        className={`absolute min-w-full min-h-full`}
      />
      {!showingInitialAnimation && (
        <>
          {/* Logo */}
          <motion.img
            ref={logoScope}
            src={`/projectLogos/${index}${isMini ? "_min" : ""}.png`}
            key={index}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y:0,opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            alt="Double U Project"
            className={`z-10 w-[180px] h-[180px] object-contain my-auto transition-all duration-75`}
          />
          {/* Project Name */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y:0,opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="p-4 z-10 self-start flex flex-col justify-end"
          >
            <p
              className={`${
                isMini ? "text-md" : "text-lg"
              } font-bold text-omi-white`}
            >
              {projectNames[index]}
            </p>
            {!isMini && (
              <p className={`text-lg font-anko font-bold text-omi-white`}>
                {projectCategories[index]}
              </p>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}
