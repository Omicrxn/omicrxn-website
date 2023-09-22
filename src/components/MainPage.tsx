"use client";
import React, { useEffect, useState } from "react";
import BackgroundGrid from "./BackgroundGrid";
import Carousel from "./Carousel";

export default function MainPage() {
  const [showInitialAnimation, setShowInitialAnimation] = useState(false);
  useEffect(() => {
    const isInitialLoad = sessionStorage.getItem("initialLoadDone");
    if (!isInitialLoad) {
      setShowInitialAnimation(true);
      sessionStorage.setItem("initialLoadDone", "true");
    }
  }, []);
  return (
    <>
      <BackgroundGrid/>
      <Carousel showInitialAnimation={true}/>
    </>
  );
}
