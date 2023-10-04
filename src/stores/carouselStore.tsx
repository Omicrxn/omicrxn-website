import carouselAnimation from '@/animations/carouselAnimation';
import { RefObject, useRef } from 'react';
import { create } from 'zustand';

interface CarouselStore {
    projectCardRef:HTMLElement|null;
    nextButtonRef:HTMLElement|null;
    setProjectCardRef: (ref: HTMLElement | null) => void;
    setNextButtonRef: (ref: HTMLElement | null) => void;
    activeIndex:number;
    activeIndexesList:number[];
    addToActiveIndexesList:()=>void;
    nextActiveIndex:()=>void;
    carouselAnim:(activeIndex:number)=>void;
}
const useCarouselStore = create<CarouselStore>()((set,get)=>({
    projectCardRef:null,
    setProjectCardRef: (ref) => set({ projectCardRef: ref }),
    nextButtonRef:null,
    setNextButtonRef: (ref) => set({ nextButtonRef: ref }),
    activeIndex:0,
    activeIndexesList:[],
    addToActiveIndexesList: () => set((state) => ({ activeIndexesList: [...state.activeIndexesList, state.activeIndex] })),
    nextActiveIndex:()=>set(state=>({activeIndex:state.activeIndex+1})),
    carouselAnim:carouselAnimation
}))

export default useCarouselStore;
