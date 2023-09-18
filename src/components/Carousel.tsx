"use client";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [indexes, setIndexes] = useState<number[]>([]); // Keep track of the visible indexes
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [elementWidth, setElementWidth] = useState(0);
  const items = [0, 1, 2, 3, 4];
  const controlsArray = items.map(() => useAnimation());
  const [gradientStop, setGradientStop] = useState(0);
  useEffect(() => {
    const animateItem = async () => {
      await controlsArray[activeIndex].start(
        {
          x: `calc((12.5%*8)*${activeIndex})`,
          opacity: 1,
          width: "12.5%",
          // transformOrigin: "left",
        },
        { ease: "easeIn" }
      );
    };
    if (activeIndex >= 0) {
      animateItem();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (textRef.current) {
      setElementWidth(textRef.current.offsetWidth);
    }

    const updateWidth = () => {
      if (textRef.current) {
        setElementWidth(textRef.current.offsetWidth);
      }
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", updateWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      updateWidth();
    };
  }, []);

  const handleMove = () => {
    setActiveIndex((prevIndex) => {
    
      console.log("prevIndex", prevIndex)
      var newIndex = prevIndex+1;
      if (newIndex > items.length) {
        return prevIndex;
      }
      setIndexes((prevIndexes) => [...prevIndexes, newIndex]);
      console.log("indexes: ",indexes)
      return newIndex;
    });
  };
  console.log("indexes: ",indexes)

  useEffect(() => {
    setTimeout(() => {
      setGradientStop(
        activeIndex > 1
          ? activeIndex * elementWidth - 16 - 24
          : (activeIndex * elementWidth) / 3 - 16 - 24
      );
    }, 1100);
  }, [activeIndex]);


  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, white ${gradientStop}px, black ${gradientStop}px)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  };
  return (
    <div className="min-h-screen h-screen w-full relative  z-20">
      <motion.button
        ref={buttonRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={handleMove}
        className="absolute top-1/2 right-0 z-40 p-4"
      >
        <Image
          src={"/icons/arrow-right.svg"}
          width={24}
          height={24}
          alt={"Next project arrow"}
        />
      </motion.button>
      {items.map((item, index) => (
        <motion.div
          ref={index === 0 ? textRef : null}
          key={index}
          // layout
          initial={{
            opacity: 1,
            // scaleX: 0.375,
            width: "37.5%",
            x: `${(100 - 37.5) / 0.375}%`,
            zIndex: items.length - index,
          }}
          animate={controlsArray[index]}
          // exit={{ opacity: 0 }}
          className="absolute bg-black transition-all duration-1000 ease-in-out min-h-full h-full "
        >
          <ProjectCard isMini={indexes.includes(index)} index={item} />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className=" absolute top-1/2 left-0 -translate-y-1/2 z-10 px-4 mx-6"
      >
        <div className=" text-7xl text-transparent font-semibold transition-all">
          <h1 style={gradientStyle}>Beyond imagination</h1>
          <h1 style={gradientStyle}>Within Reach</h1>
        </div>

        <p
          className="text-2xl text-transparent font-[400] italic font-anko transition-all"
          style={gradientStyle}
        >
          Omicrxn - Designer & Developer
        </p>
      </motion.div>
    </div>
  );
}
