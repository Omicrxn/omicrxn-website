import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectImagesList } from "@/utils/projectImages";
import gsap, { Circ, Power2 } from "gsap";
export default function Carousel({showInitialAnimation = false}:{showInitialAnimation:boolean}) {
  const box = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)
  const [animationComplete, setAnimationComplete] = useState(true);
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
    function containerTl(){
        const containerTimeline = gsap.timeline();
        containerTimeline
        .to(box.current, { x: 0,opacity:1 })
        .to(box.current, { scale: 0.75,mixBlendMode: "difference", ease:Power2.easeOut,duration:0.5,delay:0.5,onComplete(){setAnimationComplete(false)} })
        .to(box.current, { scale: 0.5, duration:3, ease:Circ.easeIn,onComplete(){setAnimationComplete(true)} },)
        .to(box.current, {scaleX:1,scaleY:1,width:"37.5vw", mixBlendMode:"normal", translateX:"62.5vw",opacity:1,delay:0.5},"initialPlacement")
        return containerTimeline;
    }
    function projectCardTl(){
        const projectCardTimeline = gsap.timeline();
        projectCardTimeline.to(".project-card-0", { opacity: 1 });
        return projectCardTimeline
    }
    
    var masterTimeline = gsap.timeline();

    masterTimeline.add(containerTl()).add(projectCardTl(),"<+1");
    if(showInitialAnimation){
        masterTimeline.play();
    }else{
        masterTimeline.play("initialPlacement");
    }
  }, []);


  return (
    <div ref={box} className="bg-omi-black w-full flex-1 translate-x-full opacity-0">
      {projectImagesList.map((_, index) => (
        <ProjectCard
          key={index}
          className={`project-card-${index} opacity-0`}
          index={index == 0?imgIndex:index}
        />
      ))}
    </div>
  );
}
