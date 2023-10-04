import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function OmicrxnLogo() {
  return (
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
  )
}
