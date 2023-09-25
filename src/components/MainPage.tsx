"use client";
import React, { useEffect, useState } from "react";
import BackgroundGrid from "./BackgroundGrid";
import Carousel from "./Carousel";
import useSessionStore from "@/stores/sessionStore";
import useInitialPageLoadAnimationStore from "@/stores/initialPageLoadAnimationStore";
import { motion } from "framer-motion";
import Image from "next/image";
import OmicrxnLogo from "./OmicrxnLogo";
import LandingText from "./LandingText";
import Contact from "./Contact";
export default function MainPage() {
  const { getSessionStorageShowingInitialAnimation } = useSessionStore();
  useEffect(() => {
    getSessionStorageShowingInitialAnimation();
  }, []);
  const showingInitialAnimation = useInitialPageLoadAnimationStore(
    (state) => state.showingInitialAnimation
  );
  return (
    <>
      <BackgroundGrid showAnimation={!showingInitialAnimation}/>
      {!showingInitialAnimation && <Contact />}
      <Carousel />
      {showingInitialAnimation ? <OmicrxnLogo /> : <LandingText />}
    </>
  );
}
