import gsap from "gsap";
export default function carouselAnimation(activeIndex: number) {
  const carouselAnim = gsap.timeline();
  carouselAnim.to(`.project-card-${activeIndex}`, { opacity: 1,});
  carouselAnim.set(`.project-card-${activeIndex + 1}`, {
    opacity: 1,
    scale: 1,
    display:"flex",
    position: "absolute",
    minWidth: "37.5vw",
    width: "37.5vw",
    mixBlendMode: "normal",
    translateX: "62.5vw",
  });

  carouselAnim.to(`.project-card-${activeIndex}`, {
    translateX: `${activeIndex * 12.5}vw`,
    minWidth: "12.5vw",
    width: "12.5vw",
  });

 
}
