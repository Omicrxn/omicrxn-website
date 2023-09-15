import React from 'react'
import Image from 'next/image'
import { AppProps } from 'next/app'
export default function ProjectCard({
    index,
  }: {
    index: Number
  }) {
  return (
    <div className='relative h-full w-full'>
        <Image src={`/projectImages/${index}.png`} fill={true} alt='Double U Project' className='invert'/>
    </div>
  )
}
