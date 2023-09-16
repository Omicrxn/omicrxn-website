"use client";
import React, { useState, useEffect } from "react";
import { AnimationSequence, easeIn, easeInOut, motion, spring, useAnimate } from "framer-motion";
import Image from "next/image";
const imageList = [
  "/projectImages/0.png",
  "/projectImages/1.png",
  "/projectImages/2.png",
  "/projectImages/3.png",
  "/projectImages/4.png",
];
const ImageContainer = ({ index }: { index: number }) => {
  const currentImage = imageList[index];
  return (
    <Image
      src={currentImage}
      alt="Dynamic"
      fill={true}
      className="invert rounded-xl w-full h-full"
    />
  );
};

export default function InitialCarousel() {
  const [index, setIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!animationComplete) {
      timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [animationComplete]);

  useEffect(() => {
    async function imageAnimation() {
      await animate(
        scope.current,
        { scaleX: 0.5,scaleY:0.5, },
        {
          duration: 5,
          ease:"easeIn",
          onComplete() {
            console.log("complete");
            setAnimationComplete(true);
          },
        }
      );
      await animate(scope.current, {scaleX:0.35, scaleY:1, x:"35vw"});
    }
    imageAnimation();
  }, []);

  return (
    <motion.div
      ref={scope}
      className="absolute w-full h-full mix-blend-difference"
    >
      <ImageContainer index={index} />
    </motion.div>
  );
}
