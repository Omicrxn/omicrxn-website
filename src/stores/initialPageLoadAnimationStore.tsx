import { create } from "zustand";
import gsap from "gsap";
import initialPageLoadAnimation from "@/animations/initialPageLoadAnimation";
import { RefObject } from "react";
interface InitialPageLoadAnimationState {
  carouselContainerAnimation: (
    boxRef: RefObject<HTMLDivElement>,
    showingInitialAnimation: boolean,
    setAnimationComplete: gsap.Callback,
    setInitialAnimationComplete: gsap.Callback,
  ) => void;
  showingInitialAnimation:boolean;
  animationComplete: boolean;
  toggleAnimationComplete: (value:boolean)=>void;
  toggleInitialAnimationComplete: (value:boolean)=>void;
}

const useInitialPageLoadAnimationStore =
  create<InitialPageLoadAnimationState>()((set, get) => ({
    carouselContainerAnimation: initialPageLoadAnimation,
    showingInitialAnimation:true,
    animationComplete: true,
    toggleAnimationComplete: (value:boolean)=>{set({animationComplete:value})},
    toggleInitialAnimationComplete: (value:boolean)=>{set({showingInitialAnimation:value})}
  }));

export default useInitialPageLoadAnimationStore;
