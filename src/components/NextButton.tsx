import useCarouselStore from '@/stores/carouselStore';
import Image from 'next/image'
import React from 'react'

export default function NextButton() {
    const activeIndex = useCarouselStore((state)=>state.activeIndex);
    const addToActiveIndexesList = useCarouselStore((state)=>state.addToActiveIndexesList);
    const nextActiveIndex = useCarouselStore((state)=>state.nextActiveIndex);
    const carouselAnim = useCarouselStore((state)=>state.carouselAnim);
    const  setNextButtonRef = useCarouselStore((state)=>state.setNextButtonRef);
    function nextProject(){
        carouselAnim(activeIndex);
        addToActiveIndexesList();
        nextActiveIndex();
    }
  return (
    <button ref={(ref) => setNextButtonRef(ref)} className='bg-black absolute' onClick={nextProject}>
        <Image src={'/icons/arrow-right.svg'} width={24} height={24} alt='next project button'/>
    </button>
  )
}
