import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// document.body.style.overflow = "hidden";

const imgGalaxy = document.querySelector(".part-1-blackhole");
const part1Book = document.querySelector(".part-1-shop");

let isExpanded = false;

imgGalaxy.addEventListener("click", () => {
  if (!isExpanded) {
    gsap.to(imgGalaxy, {
      scale: 8,
      duration: 0.3,
      borderRadius: 0,
      ease: "power2.out",
    });

    gsap.to(imgGalaxy, {
      scaleY: 26,
      scaleX: 33,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        document.body.style.overflow = "auto";
        isExpanded = true;

        gsap.to(part1Book, {
          opacity: 0,
          display: "none",
          duration: 0.1,
          ease: "power2.out",
        });
      },
    });
  } else {
    gsap.to(imgGalaxy, {
      scale: 1,
      x: "0%",
      y: "0%",
      duration: 0.3,
      borderRadius: 100,
      ease: "power2.in",
    });

    gsap.to(imgGalaxy, {
      scale: 1,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        document.body.style.overflow = "hidden";
        isExpanded = false;

        gsap.to(part1Book, {
          opacity: 1,
          display: "block",
          duration: 0.1,
          ease: "power2.in",
        });
      },
    });
  }
});

const part2Timline = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2-landscape",
    start: "top top",
    end: "+=1200vh",
    scrub: true,
    pin: ".container-part-2",
    markers: true,
    pinSpacing: true,
  },
});

part2Timline.to("#cloud-1", { opacity: 0.6, x: -70 });
part2Timline.to("#cloud-2", { opacity: 0.8, x: -50 });
part2Timline.to("#cloud-3", { opacity: 1, x: -10 });
part2Timline.to("#cloud-4", { opacity: 0.4, x: -0 });
part2Timline.to("#cloud-5", { opacity: 0.4, x: -20 });
part2Timline.to("#cloud-6", { opacity: 0.4, x: -10 });

const partCase = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-3-parallax",
    end: "+=1200vh",
    scrub: true,
    pin: ".part-3-parallax",
    markers: true,
    pinSpacing: true,
  },
});

partCase.to("#case-1", { y: -30, opacity: 1 });
partCase.to("#case-2", { y: -30, opacity: 1 });

const partStorm = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-3-storm",
    start: "top top",
    end: "+=1100vh",
    scrub: true,
    pin: ".part-3-storm",
    markers: true,
    pinSpacing: true,
  },
});

partStorm.to("#lightning-1", { opacity: 1 });

// gsap.to(".slider-track", {
//   scrollTrigger: {
//     trigger: ".horizontal-mask",
//     start: "top top", // Commence quand le haut du conteneur atteint le haut du viewport
//     // end: "+=800%", // Durée du scroll
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   x: "-600%",
//   ease: "none", // "none" est meilleur pour le scrub
// });

const partBalckout = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-part-4",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: false,
    markers: true,
  },
});
partBalckout.to(".part-4-baby", { opacity: 0 });
partBalckout.to(".part-4-effect", { opacity: 0 });
partBalckout.to(".part-4-looking", { opacity: 1 }, "<");

// Animation du flocon de neige avec mouvement zigzag
gsap.to(".part-5-snowflake", {
  scrollTrigger: {
    trigger: ".part-5-snow",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    scrub: true,
    markers: true,
  },
  y: "220vh", // Descend jusqu'en bas
  x: "+=100vw", // Mouvement horizontal pour créer le zigzag
  ease: "sine.inOut",
  motionPath: {
    // path: [
    //   { x: 0, y: 0 },
    //   { x: -10, y: "25vh" },
    //   { x: -50, y: "50vh" },
    //   { x: 120, y: "75vh" },
    //   { x: -80, y: "100vh" },
    //   { x: 90, y: "125vh" },
    //   { x: -40, y: "150vh" },
    //   { x: 60, y: "175vh" },
    //   { x: 0, y: "200vh" },
    // ],
    curviness: 1.5,
  },
});

function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}
