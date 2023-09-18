"use client";
import React, { useEffect, useState } from "react";
import InitialCarousel from "./InitialCarousel";
import PageWrapper from "./PageWrapper";
import BackgroundLines from "./BackgroundLines";
import Carousel from "./Carousel";
import Image from "next/image";
import { motion } from "framer-motion";
export default function MainPage() {
  const [showInitialAnimation, setShowInitialAnimation] = useState(false);
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const isInitialLoad = sessionStorage.getItem("initialLoadDone");
    if (!isInitialLoad) {
      setShowPage(false);
      setShowInitialAnimation(true);
        sessionStorage.setItem("initialLoadDone", "true");
    }
  }, []);
  return (
    <div>
      {showPage && (
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "block" }}
          transition={{ duration: 0.15 }}
        >
          <PageWrapper shouldAnimate={!showInitialAnimation} className="flex min-h-screen flex-col items-start justify-center bg-omi-white">
            {/* Background grid */}
            <BackgroundLines />
            <Carousel />
          </PageWrapper>
        </motion.div>
      )}
      {showInitialAnimation && (
        <div className="flex flex-row justify-center items-center min-h-screen">
          <motion.div
            animate={{ opacity: 0 }}
            transition={{ delay: 5, duration: 0.8, ease:"easeOut" }}
          >
            <Image
              src={"/omicrxn_logo.png"}
              width={320}
              height={70}
              alt="Omicrxn Logo"
              className="mix-blend-darken"
            />
          </motion.div>

          <InitialCarousel
            onAnimationFinished={() => {
              setTimeout(() => setShowInitialAnimation(false), 1200);
              setTimeout(() => setShowPage(true), 0);
            }}
          />
        </div>
      )}
    </div>
  );
}
