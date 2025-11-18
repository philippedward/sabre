import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// document.body.style.overflow = "hidden";

const imgGalaxy = document.querySelector(".part-1-img");
const part1Book = document.querySelector(".part-1-book");

let isExpanded = false; // Variable pour savoir si le cercle est agrandi

imgGalaxy.addEventListener("click", () => {
  if (!isExpanded) {
    // Animation d'agrandissement
    gsap.to(imgGalaxy, {
      scale: 8,
      duration: 0.3,
      borderRadius: 0,
      ease: "power2.out",
    });

    gsap.to(imgGalaxy, {
      scale: (30, 26),
      x: "-90%",
      y: "-50%",
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        document.body.style.overflow = "auto"; // scroll débloqué après clic
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
        document.body.style.overflow = "hidden"; // (optionnel)
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
    trigger: ".part-2-cloud",
    start: "top top",
    end: "+=1100vh",
    scrub: true,
    pin: ".container-part-2",
    markers: true,
  },
});

part2Timline.to("#cloud-1", { opacity: 0.6 });
part2Timline.to("#cloud-2", { opacity: 0.8 });
part2Timline.to("#cloud-3", { opacity: 1 });
part2Timline.to("#cloud-4", { opacity: 0.4 });
part2Timline.to("#cloud-5", { opacity: 0.4 });
part2Timline.to("#cloud-6", { opacity: 0.4 });

const partCase = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-3-case",
    start: "top top",
    end: "+=1100vh",
    scrub: true,
    pinSpacing: true,
    markers: true,
  },
});

partCase.to("#case-1", { y: 20 });
partCase.to("#case-2", { y: 20 });

const part3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-3-storm",
    // start: "top top",
    // end: "+=800vh",
    scrub: true,
    // pin: ".part-3-storm",
    pin: true,
    markers: true,
  },
});

part3Timeline.to("#lightning-1", { opacity: 1 });

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".horizontal-mask",
    start: "top top", // Commence quand le haut du conteneur atteint le haut du viewport
    // end: "+=800%", // Durée du scroll
    pin: true,
    scrub: true,
    markers: true,
  },
  x: "-600%",
  ease: "none", // "none" est meilleur pour le scrub
});

// Animation du flocon de neige avec mouvement zigzag
// gsap.to(".part-5-snowflake", {
//   scrollTrigger: {
//     trigger: ".part-5-snow",
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: true,
//     markers: true, // false pour retirer le texte qui indique end scrolling
//   },
//   y: "220vh", // Descend jusqu'en bas
//   x: "+=100vw", // Mouvement horizontal pour créer le zigzag
//   ease: "sine.inOut",
//   motionPath: {
//     path: [
//       { x: 0, y: 0 },
//       { x: 100, y: "25vh" },
//       { x: -50, y: "50vh" },
//       { x: 120, y: "75vh" },
//       { x: -80, y: "100vh" },
//       { x: 90, y: "125vh" },
//       { x: -40, y: "150vh" },
//       { x: 60, y: "175vh" },
//       { x: 0, y: "200vh" },
//     ],
//     curviness: 1.5,
//   },
// });

const parallax = gsap.parallax({
  scrollTrigger: {
    trigger: ".part-3-parallax",
    start: "top top",
    end: "+300%",
    scrub: true,
    pin: true,
    markers: true,
  },
});
parallax.to("#case-1", {
  y: -100,
});
parallax.to(
  "#case-2",
  {
    y: -400,
  },
  0
);

function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

// document.addEventListener("DOMContentLoaded", () => {
//   // sélectionne tous les liens internes commençant par #
//   document.querySelectorAll('a[href^="#"]').forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault(); // empêche le jump instantané

//       const targetId = link.getAttribute("href").slice(1); // enlève le #
//       const target = document.getElementById(targetId);

//       if (target) {
//         // scroll smooth
//         target.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });

//   // si l'URL contient déjà un hash (ex: #bottom)
//   if (window.location.hash) {
//     const target = document.getElementById(window.location.hash.slice(1));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   }
// });
