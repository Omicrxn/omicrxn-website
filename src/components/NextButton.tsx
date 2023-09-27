import useCarouselStore from '@/stores/carouselStore';
import Image from 'next/image'
import React from 'react'

export default function NextButton() {
    const activeIndex = useCarouselStore((state)=>state.activeIndex);
    const nextActiveIndex = useCarouselStore((state)=>state.nextActiveIndex);
    const carouselAnim = useCarouselStore((state)=>state.carouselAnim);
    function nextProject(){
        carouselAnim(activeIndex);
        nextActiveIndex();
    }
  return (
    <button className='bg-black absolute' onClick={nextProject}>
        <Image src={'/icons/arrow-right.svg'} width={24} height={24} alt='next project button'/>
    </button>
  )
}
