import { RefObject } from "react";
import gsap, { Circ, Power2 } from "gsap";

function containerTl(boxRef: RefObject<HTMLDivElement>, setAnimationComplete:gsap.Callback) {
  const containerTimeline = gsap.timeline();
  containerTimeline
    .to(boxRef.current, { x: 0, opacity: 1 })
    .to(boxRef.current, {
      scale: 0.75,
    //   mixBlendMode: "difference",
      ease: Power2.easeOut,
      duration: 0.5,
      delay: 0.5,
      onComplete() {
        setAnimationComplete(false);
      },
    })
    .to(boxRef.current, {
      scale: 0.5,
      duration: 3,
      ease: Circ.easeIn,
      onComplete() {
        setAnimationComplete(true);
        // setAnimationComplete(true);
      },
    })
    .to(
      boxRef.current,
      {
        scaleX: 1,
        scaleY: 1,
        width: "37.5vw",
        mixBlendMode: "normal",
        translateX: "62.5vw",
        opacity: 1,
        delay: 0.5,
      },
      "initialPlacement"
    );
  return containerTimeline;
}
function projectCardTl() {
  const projectCardTimeline = gsap.timeline();
  projectCardTimeline.to(".project-card-0", { opacity: 1 });
  return projectCardTimeline;
}

export default function initialPageLoadAnimation(boxRef:RefObject<HTMLDivElement>,showingInitialAnimation:boolean, setAnimationComplete:gsap.Callback, setInitialAnimationComplete:gsap.Callback){
    var masterTimeline = gsap.timeline({paused:true});
    masterTimeline.add(containerTl(boxRef,setAnimationComplete)).add(projectCardTl(),"<+1");
    masterTimeline.eventCallback("onComplete",()=>{setInitialAnimationComplete(false)})
   if(showingInitialAnimation){
       masterTimeline.play();
   }else{
       masterTimeline.play("initialPlacement");
   }
}
