import carouselAnimation from '@/animations/carouselAnimation';
import { create } from 'zustand';

interface CarouselStore {
    activeIndex:number;
    nextActiveIndex:()=>void;
    carouselAnim:(activeIndex:number)=>void;
}
const useCarouselStore = create<CarouselStore>()((set,get)=>({
    activeIndex:0,
    nextActiveIndex:()=>set(state=>({activeIndex:state.activeIndex+1})),
    carouselAnim:carouselAnimation
}))

export default useCarouselStore;
