"use client";
import { useState } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indexes, setIndexes] = useState([0]); // Keep track of the visible indexes

  const handleMove = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setIndexes((prevIndexes) => [...prevIndexes, newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen w-full relative grid grid-cols-8 z-20 mix-blend-difference">
      <button
        onClick={handleMove}
        className="absolute top-0 right-0 z-40 p-4 bg-blue-500 text-black"
      >
        Move
      </button>
      {[0, 1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className={`relative bg-black transition-all duration-1000 ease-in-out ${
            indexes.includes(index)
              ? index === activeIndex
                ? "col-start-6 col-span-3"
                : `col-start-${indexes.indexOf(index) + 1} col-span-1`
              : "hidden"
          }`}
        >
          <div className="absolute z-30 bg-omi-white w-full h-full opacity-20"></div>
          <ProjectCard index={index} />
        </div>
      ))}
    </div>
  );
}
