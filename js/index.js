var wideScreen = window.matchMedia("(min-width: 800px)");
var narrowScreen = window.matchMedia("(max-width: 799px)");

if (window.screen.width > 470) {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();

  const sections = document.querySelectorAll("section");
  const headers = document.querySelectorAll("header");

  console.log("aaa", sections);

  sections.forEach((section) => {
    gsap.fromTo(
      section.children,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1.3,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: section,
          start: "start 15%",

          //markers:true,
        },
      }
    );
  });
  gsap.from(".img2", {
    duration: 0.6,
    opacity: 0,
    y: 200,
  });
}
