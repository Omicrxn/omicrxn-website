"use client";
import React, { useState, useEffect } from "react";
import {
  AnimationSequence,
  easeIn,
  easeInOut,
  motion,
  spring,
  useAnimate,
} from "framer-motion";
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
  const [animationComplete, setAnimationComplete] = useState(true);
  const [scope, animate] = useAnimate();
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let speedUpTimer: NodeJS.Timeout;
    if (!animationComplete) {
      timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, intervalTime);

      speedUpTimer = setInterval(() => {
        setIntervalTime((prevIntervalTime) =>
          Math.max(120, prevIntervalTime - 120)
        ); // Min of 100ms
      }, intervalTime);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
      if (speedUpTimer) {
        clearInterval(speedUpTimer);
      }
    };
  }, [animationComplete, intervalTime]);

  useEffect(() => {
    async function imageAnimation() {
      await animate(
        scope.current,
        { x: "0%" },
        {
          type: "spring",
          ease: "easeOut",
          duration: 0.5,
          onComplete() {
            setAnimationComplete(false);
          },
        }
      );
      await animate(
        scope.current,
        { scaleX: 0.5, scaleY: 0.5 },
        {
          duration: 5,
          type: "tween",
          ease: "circIn",
          onComplete() {
            console.log("complete");
            setAnimationComplete(true);
          },
        }
      );
      await animate(
        scope.current,
        { scaleX: 0.35, scaleY: 1, x: "35vw" },
        { delay: 0.5, type: "tween", ease: "easeIn" }
      );
    }
    imageAnimation();
  }, []);

  return (
    <motion.div
      ref={scope}
      initial={{ x: "100%" }}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="absolute w-full h-full mix-blend-difference"
    >
      <ImageContainer index={index} />
    </motion.div>
  );
}
