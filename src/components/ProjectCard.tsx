import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { projectImagesList } from "@/utils/projectImages";
import {
  animate,
  motion,
  useAnimate,
  useAnimationControls,
} from "framer-motion";
import useInitialPageLoadAnimationStore from "@/stores/initialPageLoadAnimationStore";
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
  const projectNames = ["Double U", "Phage", "Dune", "Vasek", "JR"];
  const projectCategories = [
    "UX/UI Designer & Developer",
    "Founder",
    "Lead Developer",
    "UX/UI Designer & Developer",
    "Developer",
  ];
  useEffect(() => {
    console.log("initial anim", showingInitialAnimation);
  }, [showingInitialAnimation]);

  useEffect(() => {
    console.log(isMini, index);
    async function animateLogo() {
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
      className={`${className} flex flex-col justify-center items-center flex-1 min-w-full`}
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
            src={`/projectLogos/${index}${isMini ? "_min" : ""}.png`}
            key={index}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y:0,opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            alt="Double U Project"
            className={`z-10 w-[180px] h-[180px] object-contain my-auto`}
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
