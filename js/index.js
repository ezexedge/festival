//GSAP
var wideScreen = window.matchMedia("(min-width: 800px)");
var narrowScreen = window.matchMedia("(max-width: 799px)");

if (window.screen.width > 470) {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();

  const sections = document.querySelectorAll(".text-img");
  const headers = document.querySelectorAll("header");

  console.log("aaa", sections);

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { y: "+=250", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1.5,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",

          //markers: true,
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
//BOOTSTRAP 5 CLOSE NAVBAR
$(document).ready(function () {
  $("nav li").click(function () {
    $("nav li").removeClass("active");
    $(this).toggleClass("active");
  });
});

$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

//PARALLAX
var images = document.querySelectorAll(".img-section");
new simpleParallax(images);
