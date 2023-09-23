"use client";
import React, { useEffect, useState } from "react";
import BackgroundGrid from "./BackgroundGrid";
import Carousel from "./Carousel";
import useSessionStore from "@/stores/sessionStore";

export default function MainPage() {
  const { getSessionStorageShowingInitialAnimation } = useSessionStore();
  useEffect(() => {
    getSessionStorageShowingInitialAnimation();
  }, []);
  return (
    <>
      <BackgroundGrid />
      <Carousel />
    </>
  );
}
