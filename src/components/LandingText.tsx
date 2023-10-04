import useCarouselStore from "@/stores/carouselStore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function LandingText() {
  const [gradientStop, setGradientStop] = useState(0);
  const activeIndex = useCarouselStore((state)=>state.activeIndex);
  const projectCardRef = useCarouselStore((state)=>state.projectCardRef);
  const nextButtonRef = useCarouselStore((state)=>state.nextButtonRef);
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    if (projectCardRef) {
      setElementWidth(projectCardRef.offsetWidth);
    }

    const updateWidth = () => {
      if (projectCardRef) {
        setElementWidth(projectCardRef.offsetWidth);
      }
    };

    if (nextButtonRef) {
      nextButtonRef.addEventListener("click", updateWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      updateWidth();
    };
  }, []);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:2, delay: 0.15 }}
      className=" absolute px-4 mx-6"
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
  );
}
