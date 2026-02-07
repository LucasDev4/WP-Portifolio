gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

window.addEventListener("load", () => {
  const tlLoad = gsap.timeline();

  tlLoad.fromTo(
    ["#bola1", "#bola2", "#bola3"],
    { scale: 0.6, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out", stagger: 0.2 }
  )
    .fromTo("#p",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=1"
    )
    .fromTo("#h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo("#butao",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 0.8, duration: 0.8, ease: "power1.out" },
      "-=0.6"
    );
});

gsap.to("#bola1", { y: 30, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to("#bola2", { y: -40, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to("#bola3", { y: 25, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });


mm.add("(min-width: 800px)", () => {

  const header = document.querySelector("header");
  header.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    gsap.to("#bola1", { x: x * 0.6, y: y * 0.6, duration: 0.6, ease: "power2.out" });
    gsap.to("#bola2", { x: x * 1.2, y: y * 1.2, duration: 0.8, ease: "power2.out" });
    gsap.to("#bola3", { x: x * 0.9, y: y * 0.9, duration: 0.7, ease: "power2.out" });
  });

  gsap.fromTo(".celular-3d",
    { y: 200, scale: 0.7, opacity: 0, rotation: 60, rotateY: -10 },
    {
      y: 0, scale: 1, opacity: 1, rotation: 0, rotateX: 8, rotateY: -18, ease: "none",
      scrollTrigger: {
        trigger: ".celular-wrapper",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    }
  );

  gsap.fromTo(".parte1",
    { opacity: 0, x: -400 },
    { opacity: 1, x: 0, scrollTrigger: { trigger: ".parte1", start: "top 90%", end: "top 50%", scrub: true } }
  );

  gsap.fromTo(".parte2",
    { opacity: 0, x: 400 },
    { opacity: 1, x: 0, scrollTrigger: { trigger: ".parte1", start: "top 90%", end: "top 50%", scrub: true } }
  );

  gsap.fromTo(".part1",
    { opacity: 0, x: -1000 },
    { opacity: 1, x: -100, scrollTrigger: { trigger: ".part1", start: "top 90%", end: "top 30%", scrub: true } }
  );

  gsap.fromTo(".part2",
    { opacity: 0, x: 1000 },
    { opacity: 1, x: 100, scrollTrigger: { trigger: ".part2", start: "top 90%", end: "top 50%", scrub: true } }
  );
});

mm.add("(max-width: 799px)", () => {

  gsap.fromTo(".celular-3d",
    { y: 100, scale: 0.8, opacity: 0 },
    {
      y: 0, scale: 1, opacity: 1, ease: "power2.out",
      scrollTrigger: {
        trigger: ".celular-wrapper",
        start: "top 85%",
        end: "top 50%",
        scrub: 1
      }
    }
  );
  gsap.fromTo(".parte1",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, scrollTrigger: { trigger: ".parte1", start: "top 85%", end: "top 60%", scrub: true } }
  );

  gsap.fromTo(".parte2",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, scrollTrigger: { trigger: ".parte2", start: "top 85%", end: "top 60%", scrub: true } }
  );

  gsap.fromTo([".part1", ".part2"],
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.1, scrollTrigger: { trigger: ".projetosContainer", start: "top 80%", end: "top 60%", scrub: true } }
  );
});

gsap.fromTo(".letter",
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, scrollTrigger: { trigger: ".letter", start: "top 90%", end: "top 60%", scrub: true } }
);

gsap.fromTo(".btn",
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, scrollTrigger: { trigger: ".fale", start: "top 90%", end: "top 60%", scrub: true } }
);

gsap.fromTo(".card",
  { opacity: 0, y: 100 },
  {
    opacity: 1, y: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".containerCards",
      start: "top 85%",
      end: "bottom 80%",
      scrub: 1
    }
  }
);

gsap.fromTo(".celular",
  { scale: 1 },
  {
    scale: 0.95,
    scrollTrigger: { trigger: ".celular-wrapper", start: "top 80%", end: "top 30%", scrub: true }
  }
);
gsap.fromTo(".information.first",
  { opacity: 0, y: 50, scale: 0.9 },
  {
    opacity: 1, y: 0, scale: 1,
    scrollTrigger: { trigger: ".avaliacoes", start: "top 70%", end: "top 40%", scrub: true }
  }
);

gsap.fromTo(["footer .sobre", "footer .contato", "footer .politicas"],
  { opacity: 0, y: 50 },
  {
    opacity: 1, y: 0, stagger: 0.1, duration: 0.8,
    scrollTrigger: { trigger: "footer", start: "top 90%" }
  }
);
const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu-mobile a");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
  });
});
const informations = document.querySelectorAll(".information");
const arrows = document.querySelectorAll(".SetaPreta");

let currentIndex = 0;

function showInformation(index) {
  informations.forEach(info => info.classList.remove("first"));
  informations[index].classList.add("first");
}

arrows[0].addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = informations.length - 1;
  }

  showInformation(currentIndex);
});

arrows[1].addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex++;

  if (currentIndex >= informations.length) {
    currentIndex = 0;
  }

  showInformation(currentIndex);
});
