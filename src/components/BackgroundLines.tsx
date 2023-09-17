'use client'
import Carousel from './Carousel';
import {motion} from 'framer-motion'
export default function BackgroundLines() {
  return (
    <motion.div initial={{y:"-100%"}} animate={{y:"0%"}} transition={{duration:1,delay:1}} className="grid grid-cols-8 h-full w-full absolute inset-0">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={`w-full ${i < 7 ? 'border-r-2' : ''} border-omi-grid`}></div>
      ))}
    </motion.div>
  );
};