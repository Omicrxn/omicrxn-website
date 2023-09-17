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
      className="invert w-full h-full"
    />
  );
};

export default function InitialCarousel({onAnimationFinished}:{onAnimationFinished:Function}) {
  const [index, setIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [scope, animate] = useAnimate();
  const [childScope, childAnimate] = useAnimate();
  const [imgScope, imgAnimate] = useAnimate();
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
          Math.max(100, prevIntervalTime - 290)
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
      await childAnimate(childScope.current, { x: "0%" });
      await imgAnimate(imgScope.current,{opacity:1})
      childAnimate(
        childScope.current,
        { opacity: 0 },
        {
          duration: 0.1,
          delay:0.5,
          onComplete() {
            setAnimationComplete(false);
          },
        }
      );
      await animate(
        scope.current,
        { scaleX: 0.75, scaleY:0.75},
        {
          type: "spring",
          ease: "easeOut",
          duration: 0.5,
          delay: 0.5,
        }
      );
      
      await animate(
        scope.current,
        { scaleX: 0.5, scaleY: 0.5, borderRadius: 16 },
        {
          duration: 3,
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
        { scaleX: 0.35, scaleY: 1, x: "35vw", },
        { delay: 0.15, type: "tween", ease: "easeInOut", onComplete() {
            onAnimationFinished()
        }, }
      );
    }
    imageAnimation();
  }, []);

  return (
    <motion.div
      ref={scope}
      initial={{ borderRadius: 0 }}
      className="absolute overflow-hidden w-full h-full mix-blend-difference"
    >
      <motion.div ref={imgScope} initial={{ opacity: 0 }}>
        <ImageContainer index={index} />
      </motion.div>
      <motion.div
        ref={childScope}
        initial={{ x: "100%" }}
        className="w-full h-full bg-omi-black invert"
      ></motion.div>
    </motion.div>
  );
}
