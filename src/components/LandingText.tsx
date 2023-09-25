import { motion } from "framer-motion";
import React from "react";

export default function LandingText() {
    const gradientStop = 0;
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, white ${gradientStop}px, black ${gradientStop}px)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      };
        return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:2, delay: 0.15 }}
      className=" absolute px-4 mx-6"
    >
      <div className=" text-7xl text-transparent font-semibold transition-all">
        <h1 style={gradientStyle}>Beyond imagination</h1>
        <h1 style={gradientStyle}>Within Reach</h1>
      </div>

      <p
        className="text-2xl text-transparent font-[400] italic font-anko transition-all"
        style={gradientStyle}
      >
        Omicrxn - Designer & Developer
      </p>
    </motion.div>
  );
}
