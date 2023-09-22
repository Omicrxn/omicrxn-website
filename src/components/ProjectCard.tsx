import React from 'react'
import Image from 'next/image';
import { projectImagesList } from '@/utils/projectImages';


export default function ProjectCard({index, className}:{index:number,className:string}) {
    const currentImage = projectImagesList[index]
  return (
    <Image src={currentImage}
    alt="Project Card"
    fill={true}
    className={`${className} invert w-full h-full`}/>
  )
}
