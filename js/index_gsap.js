gsap.from(".hello_hand, .main_visual_text p", {
  opacity: 0,
  y: 500,
  duration: 1.2,
  stagger: 0.5,
});

// -------------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);
gsap.from(".sec2 > .con h3, .sec2 > .con p", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec2",
    start: "top 100%",
    end: "top 50%",
    // markers: true,
    scrub: 1,
  },
});

// -------------------------------------------------------------------------------

ScrollTrigger.batch(".sec3 .con a", {
  onEnter: (batch) =>
    gsap.to(batch, { autoAlpha: 1, stagger: 0.3, visibility: "visible" }),
  onLeave: (batch) => gsap.to(batch, { autoAlpha: 0, visibility: "hidden" }),
  onEnterBack: (batch) =>
    gsap.to(batch, { autoAlpha: 1, stagger: 0.3, visibility: "visible" }),
  onLeaveBack: (batch) =>
    gsap.to(batch, { autoAlpha: 0, visibility: "hidden" }),
  start: "top bottom", // 시작
  end: "bottom top",
});
// autoAlpha: 1:  opacity 1로 설정, visibility는 visible
// autoAlpha: 0:  opacity 0으로 설정, visibility는 hidden

// -------------------------------------------------------------------------------

// GSAP 애니메이션 설정
gsap.set(".more_img_wrap .image", { opacity: 0, y: 20 }); // 처음 상태 설정

document.querySelector(".more a").addEventListener("mouseenter", () => {
  gsap.to(".more_img_wrap", {
    opacity: 1,
    y: -40,
    duration: 1,
    stagger: 0.2,
  });

  gsap.to(".more_img_wrap .image1", {
    opacity: 1,
    duration: 0.3,
    stagger: {
      amount: 0.3,
    },
    scale: () => {
      return Math.random() * 0.4 + 0.8;
    },
    y: () => {
      return Math.random() * -80 + 10;
    },
  });
  gsap.to(".more_img_wrap .image2", {
    opacity: 1,
    duration: 0.3,
    stagger: {
      amount: 0.3,
    },
    scale: () => {
      return Math.random() * 0.4 + 0.8;
    },
    y: () => {
      return Math.random() * -80 + 10;
    },
  });
  gsap.to(".more_img_wrap .image3", {
    opacity: 1,
    duration: 0.3,
    stagger: {
      amount: 0.3,
    },
    scale: () => {
      return Math.random() * 0.4 + 0.8;
    },
    y: () => {
      return Math.random() * -80 + 10;
    },
  });
});

document.querySelector(".more a").addEventListener("mouseleave", () => {
  // 마우스가 버튼을 벗어날 때 이미지들이 다시 사라지도록 설정
  gsap.to(".more_img_wrap .image", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.2, // 이미지들이 순차적으로 사라짐
  });

  gsap.to(".more_img_wrap", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });
});
