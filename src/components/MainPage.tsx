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

  useEffect(() => {
    const isInitialLoad = sessionStorage.getItem("initialLoadDone");
    if (!isInitialLoad) {
      setShowInitialAnimation(true);
      sessionStorage.setItem("initialLoadDone", "true");
    }
  }, []);
  return (
    <div>
      {showInitialAnimation ? (
        <div className="flex flex-row justify-center items-center min-h-screen">
          <Image
            src={"/omicrxn_logo.png"}
            width={320}
            height={70}
            alt="Omicrxn Logo"
            className="mix-blend-darken"
          />
          <InitialCarousel
            onAnimationFinished={() => setShowInitialAnimation(false)}
          />
        </div>
      ) : (
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "block" }}
          transition={{ duration: 0.15 }}
        >
          <PageWrapper className="flex min-h-screen flex-col items-start justify-center bg-omi-white">
            {/* Background grid */}
            <BackgroundLines />
            <Carousel />
          </PageWrapper>
        </motion.div>
      )}
    </div>
  );
}
