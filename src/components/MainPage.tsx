"use client";
import React, { useEffect, useState } from "react";
import BackgroundGrid from "./BackgroundGrid";
import Carousel from "./Carousel";
import useSessionStore from "@/stores/sessionStore";
import useInitialPageLoadAnimationStore from "@/stores/initialPageLoadAnimationStore";
import { motion } from "framer-motion";
import Image from "next/image";
export default function MainPage() {
  const { getSessionStorageShowingInitialAnimation } = useSessionStore();
  useEffect(() => {
    getSessionStorageShowingInitialAnimation();
  }, []);
  const showingInitialAnimation = useInitialPageLoadAnimationStore((state)=>state.showingInitialAnimation);
  return (
    <>
      <BackgroundGrid />
      <Carousel />

      {showingInitialAnimation && (
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 0.8, ease:"easeOut" }}
          >
            <Image
              src={"/omicrxn_logo.png"}
              width={320}
              height={70}
              alt="Omicrxn Logo"
              className="invert"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
