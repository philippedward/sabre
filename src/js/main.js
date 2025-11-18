import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// document.body.style.overflow = "hidden";

const imgGalaxy = document.querySelector(".part-1-blackhole");
const part1Book = document.querySelector(".part-1-shop");

let isExpanded = false;

const cursorText = document.createElement("div");
cursorText.textContent = "Scroll";
cursorText.style.cssText = `
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  font-family: "rama-gothic-c";
  font-size: 150px;
  font-weight: 500;
  color: var(--yellow);
  opacity: 0;
  transform: translate(-50%, 20%);
`;
document.body.appendChild(cursorText);

document.addEventListener("mousemove", (e) => {
  cursorText.style.left = e.clientX + "px";
  cursorText.style.top = e.clientY + 50 + "px"; // +50px en dessous du curseur
});

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

        // Afficher le texte "Scroll"
        gsap.to(cursorText, {
          opacity: 1,
          duration: 0.3,
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

        // Masquer le texte "Scroll"
        gsap.to(cursorText, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      },
    });
  }
});

const partClouds = gsap.timeline({
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

partClouds.to("#cloud-1", { opacity: 0.6, x: -70 });
partClouds.to("#cloud-2", { opacity: 0.8, x: -50 });
partClouds.to("#cloud-3", { opacity: 1, x: -10 });
partClouds.to("#cloud-4", { opacity: 0.4, x: -0 });
partClouds.to("#cloud-5", { opacity: 0.4, x: -20 });
partClouds.to("#cloud-6", { opacity: 0.4, x: -10 });

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

const partBlack = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-part-4",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: false,
    markers: true,
  },
});
partBlack.to(".part-4-baby", { opacity: 0 });
partBlack.to(".part-4-effect", { opacity: 0 });
partBlack.to(".part-4-looking", { opacity: 1 }, "<");

// gsap.to(".part-5-snowflake", {
//   scrollTrigger: {
//     trigger: ".part-5-cave-snow",
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   y: "220vh", // Descend jusqu'en bas
//   x: "+=100vw", // Mouvement horizontal pour créer le zigzag
//   motionPath: {
//     path: [
//       { x: "0%", y: "0%" },
//       { x: "25%", y: "8%" },
//       { x: "55%", y: "10%" },
//       { x: "78%", y: "11%" }, // PAUSE 1
//       { x: "78%", y: "40%" },
//       { x: "72%", y: "60%" },
//       { x: "65%", y: "78%" },
//       { x: "55%", y: "90%" },
//       { x: "48%", y: "96%" }, // PAUSE 2
//       { x: "45%", y: "100%" },
//     ],
//     curviness: 1.5,
//   },
// });

const partBlackout = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-part-4",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: false,
    markers: true,
  },
});
partBlackout.to(".part-4-baby", { opacity: 0 });
partBlackout.to(".part-4-effect", { opacity: 0 });
partBlackout.to(".part-4-looking", { opacity: 1 }, "<");

const pauseDuration = 3;

const snowTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-5-snow",
    start: "top top",
    end: "bottom bottom",
    pin: ".part-5-snow",
    scrub: true,
    markers: true,
    toggleActions: "play none none reverse",
  },
});

const pathPoints = [
  { x: "0%", y: "0%" }, // départ (haut-gauche)
  { x: "25%", y: "8%" },
  { x: "55%", y: "10%" },
  { x: "78%", y: "11%" }, // PAUSE 1 (cercle jaune haut)
  { x: "78%", y: "40%" },
  { x: "72%", y: "60%" },
  { x: "65%", y: "78%" },
  { x: "55%", y: "90%" },
  { x: "48%", y: "96%" }, // PAUSE 2 (nez)
  { x: "45%", y: "100%" },
];

// Durations par segment (en secondes) : ajuste la vitesse des portions
const segmentDurations = [0.8, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];

// Construire la timeline segment par segment
for (let i = 0; i < pathPoints.length - 1; i++) {
  const from = pathPoints[i];
  const to = pathPoints[i + 1];
  const dur = segmentDurations[i] || 1;

  // tween qui fait le mouvement le long d'un petit sous-chemin
  snowTl.to(".part-5-snowflake", {
    duration: dur,
    ease: "power1.inOut",
    motionPath: {
      path: [from, to],
      curviness: 1.2,
      autoRotate: false,
    },
  });

  if (i + 1 === 3 || i + 1 === 8) {
    snowTl.to({}, { duration: pauseDuration });
  }
}

gsap.set(".part-5-snowflake", {
  x: 0,
  y: 0,
  transformOrigin: "50% 50%",
});

function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

const partParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-5-trigger",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: ".part-5-trigger",
    markers: true,
    pinSpacing: false,
  },
});

partParallax.to(
  ".part-5-parallax-sky",
  {
    y: "-30vh",
    ease: "none",
  },
  0
);

partParallax.to(
  ".part-5-parallax-montain",
  {
    y: "-20vh",
    ease: "none",
  },
  0
);
