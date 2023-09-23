import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectImagesList } from "@/utils/projectImages";
import useSessionStore from "@/stores/sessionStore";
import useInitialPageLoadAnimationStore from "@/stores/initialPageLoadAnimationStore";
export default function Carousel() {
  const showingInitialAnimation = useSessionStore((state)=>state.showingInitialAnimation);
  const trigger = useSessionStore((state)=>state.trigger);
  const carouselContainerAnimation = useInitialPageLoadAnimationStore((state)=>state.carouselContainerAnimation);
  const box = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)
  const animationComplete = useInitialPageLoadAnimationStore((state)=>state.animationComplete);
  const toggleAnimationComplete = useInitialPageLoadAnimationStore((state)=>state.toggleAnimationComplete);
  const toggleInitialAnimationComplete = useInitialPageLoadAnimationStore((state)=>state.toggleInitialAnimationComplete);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [imgIndex, setIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let speedUpTimer: NodeJS.Timeout;
    if (!animationComplete) {
      timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % projectImagesList.length);
      }, intervalTime);

      speedUpTimer = setInterval(() => {
        setIntervalTime((prevIntervalTime) =>
          Math.max(125, prevIntervalTime - 300)
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
    
    if(trigger){
      carouselContainerAnimation(box,showingInitialAnimation,toggleAnimationComplete,toggleInitialAnimationComplete);
    }
  }, [showingInitialAnimation]);


  return (
    <div ref={box} className="bg-omi-black w-full flex-1 flex translate-x-full opacity-0">
     
      {projectImagesList.map((_, index) => (
        <ProjectCard
          key={index}
          className={`project-card-${index} opacity-0`}
          index={index == 0?imgIndex:index}
          isMini={false}
        />
      ))}
    </div>
  );
}
