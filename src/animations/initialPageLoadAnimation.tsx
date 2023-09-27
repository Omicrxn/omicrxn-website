import { RefObject } from "react";
import gsap, { Circ, Power2 } from "gsap";

function containerTl(boxRef: RefObject<HTMLDivElement>,) {
  const containerTimeline = gsap.timeline();
  containerTimeline
    .to(boxRef.current, { x: 0, opacity: 1})
    .to(boxRef.current,{backgroundColor:"transparent",delay:0.5})
    
  return containerTimeline;
}
function projectCardTl(setAnimationComplete:gsap.Callback) {
  const projectCardTimeline = gsap.timeline();
  projectCardTimeline.set(".project-card-0", {minWidth:"100vw"})
  .to('.project-card-0', {
    scale: 0.75,
    opacity:1,
    display:"flex",
  //   mixBlendMode: "difference",
    ease: Power2.easeOut,
    duration: 0.5,
    delay: 0.5,
    onComplete() {
      setAnimationComplete(false);
    },
  })
  .to('.project-card-0', {
    scale: 0.5,
    duration: 3,
    ease: Circ.easeIn,
    onComplete() {
      setAnimationComplete(true);
    },
  })
  .to(
    '.project-card-0',
    {
      position: "absolute",
      scale:1,
      minWidth: "37.5vw",
      width: "37.5vw",
      mixBlendMode: "normal",
      translateX: "62.5vw",
      opacity: 1,
      delay: 0.5,
    },
    "initialPlacement"
  );
  return projectCardTimeline;
}

export default function initialPageLoadAnimation(boxRef:RefObject<HTMLDivElement>,showingInitialAnimation:boolean, setAnimationComplete:gsap.Callback, setInitialAnimationComplete:gsap.Callback){
    var masterTimeline = gsap.timeline({paused:true});
    masterTimeline.add(containerTl(boxRef)).add(projectCardTl(setAnimationComplete),"<+0.5");
    masterTimeline.eventCallback("onComplete",()=>{setInitialAnimationComplete(false)})
   if(showingInitialAnimation){
       masterTimeline.play();
   }else{
       masterTimeline.play("initialPlacement");
   }
}
