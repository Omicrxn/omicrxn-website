"use client";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indexes, setIndexes] = useState([0]); // Keep track of the visible indexes
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setElementWidth(textRef.current.offsetWidth);
    }

    const updateWidth = () => {
      if (textRef.current) {
        setElementWidth(textRef.current.offsetWidth);
      }
    };

    if(buttonRef.current){
      buttonRef.current.addEventListener("click",updateWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      updateWidth;
    };
  }, []);

  const handleMove = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setIndexes((prevIndexes) => [...prevIndexes, newIndex]);
      return newIndex;
    });
  };

  const gradientStop = activeIndex>1?(activeIndex) * elementWidth - 16 - 24: activeIndex*elementWidth/3- 16 - 24;
  // console.log("elementwidth:", elementWidth); // Debug log
  // console.log("active indx:", activeIndex); // Debug log
  // console.log("gradient:", gradientStop); // Debug log
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, white ${gradientStop}px, black ${gradientStop}px)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  };
  return (
    <div className="min-h-screen w-full relative grid grid-cols-8 z-20">
      <button
        ref={buttonRef}
        onClick={handleMove}
        className="absolute top-1/2 right-0 z-40 p-4 bg-blue-500 text-black"
      >
        Move
      </button>
      {[0, 1, 2, 3, 4].map((_, index) => (
        <div
          ref={index === 0 ? textRef : null}
          key={index}
          className={`relative bg-black transition-all duration-1000 ease-in-out ${
            indexes.includes(index)
              ? index === activeIndex
                ? "col-start-6 col-span-3"
                : `col-start-${indexes.indexOf(index) + 1} col-span-1`
              : "hidden"
          }`}
        >
          {/* <div className="absolute z-30 bg-omi-white w-full h-full opacity-20"></div> */}
          <ProjectCard index={index} />
        </div>
      ))}
      <div className=" absolute top-1/2 -translate-y-1/2 z-10 px-4 mx-6">
        <div className=" text-7xl text-transparent font-semibold transition-all">
          <h1
            style={gradientStyle}
          >
            Beyond imagination
          </h1>
          <h1
            style={gradientStyle}
          >
            Within Reach
          </h1>
        </div>

        <p
          className="text-2xl text-transparent font-semibold transition-all"
          style={gradientStyle}
        >
          Omicrxn - Designer & Developer
        </p>
      </div>
    </div>
  );
}
