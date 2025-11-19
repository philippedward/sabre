import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
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

window.addEventListener("load", () => {
  const goingImg = document.querySelector(".horizantal-goinging img");
  const imgWidth = goingImg.offsetWidth;
  const viewportWidth = window.innerWidth;
  const distance = imgWidth - viewportWidth;

  gsap.to(".slider-track", {
    scrollTrigger: {
      trigger: ".horizontal-mask",
      start: "top top",
      end: `+=${distance * 2}`,
      pin: true,
      scrub: 1,
      markers: true,
      anticipatePin: 1,
      pinSpacing: true, // ← AJOUTE ÇA
    },
    x: -distance,
    ease: "none",
  });
});

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

const parallaxSection = document.querySelector(".parallax-fin");
const backImage = document.getElementById("parallax-back");

window.addEventListener("scroll", () => {
  if (parallaxSection && backImage) {
    const rect = parallaxSection.getBoundingClientRect();
    const scrollProgress = -rect.top / window.innerHeight;

    const moveAmount = scrollProgress * -150;
    backImage.style.transform = `translateY(${moveAmount}px)`;
  }
});

function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

// const pauseDuration = 2;

// const snowTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".part-5-cave-snow",
//     start: "top top",
//     end: "+=1100vh",
//     pin: ".part-5-cave-snow",
//     scrub: true,
//     markers: true,
//   },
// });

// // Points du circuit basés sur l'image
// const pathPoints = [
//   { x: "15%", y: "5%" }, // Départ (haut-gauche, cercle jaune)
//   { x: "35%", y: "15%" }, // Descente plus prononcée (15% → 25%)
//   { x: "60%", y: "20%" }, // Continue à descendre (10% → 20%)
//   { x: "90%", y: "22%" }, // PAUSE 1 - Plus bas, au-dessus de la tête (11% → 22%)
//   { x: "80%", y: "40%" }, // Descente verticale
//   { x: "72%", y: "60%" }, // Descente le long du nez
//   { x: "65%", y: "78%" }, // Continue vers le nez
//   { x: "55%", y: "90%" }, // Approche du nez
//   { x: "48%", y: "96%" }, // PAUSE 2 (cercle jaune sur le nez)
//   { x: "45%", y: "100%" }, // Fin (bas)
// ];

// // Durées par segment (ajuste la vitesse)
// const segmentDurations = [
//   0.8, // 0 -> 1
//   1.2, // 1 -> 2
//   1.0, // 2 -> 3 (vers pause 1)
//   1.0, // 3 -> 4 (après pause 1)
//   1.0, // 4 -> 5
//   1.0, // 5 -> 6
//   1.0, // 6 -> 7
//   1.0, // 7 -> 8 (vers pause 2)
//   1.0, // 8 -> 9 (après pause 2)
// ];

// // Construire la timeline segment par segment
// for (let i = 0; i < pathPoints.length - 1; i++) {
//   const from = pathPoints[i];
//   const to = pathPoints[i + 1];
//   const dur = segmentDurations[i] || 1;

//   // Animation du mouvement
//   snowTl.to(".part-5-snow-flake", {
//     duration: dur,
//     ease: "power1.inOut",
//     motionPath: {
//       path: [from, to],
//       curviness: 1.2,
//       autoRotate: false,
//     },
//   });

//   // Ajouter les pauses aux cercles jaunes
//   // i+1 === 3 : pause au cercle haut-droite
//   // i+1 === 8 : pause au cercle sur le nez
//   if (i + 1 === 3 || i + 1 === 8) {
//     snowTl.to({}, { duration: pauseDuration });
//   }
// }

// // Position initiale du flocon
// gsap.set(".part-5-snow-flake", {
//   x: 0,
//   y: 0,
//   transformOrigin: "50% 50%",
