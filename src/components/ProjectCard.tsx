import React, { useEffect } from "react";
import Image from "next/image";
import { AppProps } from "next/app";
import { animate, motion, useAnimate } from "framer-motion";
export default function ProjectCard({
  index,
  isMini = false,
}: {
  index: number;
  isMini: boolean;
}) {
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
    console.log(isMini,index)
    async function animateLogo(){
      await logoAnimate(logoScope.current, { scale:0.5, y:"-35vh" },{duration:1,delay:0.5});

    }
    if (isMini) {
      animateLogo()
    }
  }, [isMini]);
  return (
    <div className="relative h-full w-full flex flex-col justify-end items-center">
      {/* BG */}
      <div className="absolute w-full h-full z-0 brightness-90">
        <Image
          src={`/projectImages/${index}.png`}
          fill={true}
          objectFit="cover"
          alt="Double U Project"
        />
      </div>

      {/* Logo */}
      <motion.img
        src={`/projectLogos/${index}${isMini?'_min':''}.png`}
        key={index}
        ref={logoScope}
        initial={{y:0}}
        alt="Double U Project"
        className={`z-10 w-[180px] h-[180px] object-contain my-auto`}
      />
      {/* Project Name */}
      <div className="p-4 z-10 self-start flex flex-col justify-end">
        <p className={`${isMini?"text-md":"text-lg"} font-bold text-omi-white`}>
          {projectNames[index]}
        </p>
        {
          !isMini&&<p className={`text-lg font-anko font-bold text-omi-white`}>
          {projectCategories[index]}
        </p>
        }
        
      </div>
    </div>
  );
}
