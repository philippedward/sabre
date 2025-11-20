import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
  font-size: 100px;
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
    trigger: ".part-3-cases",
    end: "+=1200vh",
    scrub: true,
    pin: ".part-3-cases",
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

partStorm.to("#lightning", { opacity: 1 });

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
    pinSpacing: true,
  },
  x: -distance,
  ease: "none",
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

    const moveAmount = scrollProgress * -120;
    backImage.style.transform = `translateY(${moveAmount}px)`;
  }
});

function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  const leaderSvg = document.getElementById("leader-svg");

  if (!dropdown || !leaderSvg) {
    console.warn("toggleMenu: éléments introuvables", { dropdown, leaderSvg });
    return;
  }

  dropdown.classList.toggle("open");
  leaderSvg.classList.toggle("rotate");

  const isOpen = dropdown.classList.contains("open");
  dropdown.setAttribute("aria-hidden", !isOpen);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("main-btn");
  if (btn) btn.addEventListener("click", toggleMenu);
});

const partSnow = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-snow",
    start: "top top",
    end: "+=600vh",
    pin: ".snow-trigger",
    scrub: 4,
    markers: true,
    pinSpacing: true,
  },
  x: -distance,
  ease: "none",
});

// Animation de la boule de neige sur le circuit
partSnow
  .to(".snow-flake", {
    motionPath: {
      path: [
        { x: "12%", y: "5%" }, // Départ haut gauche
        { x: "30%", y: "15%" },
        { x: "80%", y: "18%" },
        { x: "50%", y: "55%" }, // Descente vers le milieu
        { x: "50%", y: "65%" }, // Vers le chien bas
      ],
      curviness: 1.2,
    },
    duration: 3,
    ease: "none",
  })
  .to(".snow-flake", {
    duration: 1, // Pause au niveau du chien
    ease: "none",
  })
  .to(".snow-flake", {
    x: "65%",
    y: "75%",
    duration: 1,
    ease: "none",
  });
