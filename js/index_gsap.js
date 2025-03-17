gsap.from(".hello_hand, .main_visual_text p", {
  opacity: 0,
  y: 500,
  duration: 1.2,
  stagger: 0.5,
});

// -------------------------------------------------------------------------------
let breakpointSec2Text = gsap.matchMedia();
breakpointSec2Text.add("(min-width: 769px)", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".sec2 > .con h3, .sec2 > .con p", { y: 500, opacity: 0 });

  gsap.fromTo(
    ".sec2 > .con h3, .sec2 > .con p",
    {
      // 시작
      opacity: 0,
      y: 100,
    },
    {
      // 끝
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 100%",
        end: "top 50%",
        // markers: true,
        scrub: 1,
      },
    }
  );
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
let breakpointSec3More = gsap.matchMedia();
breakpointSec3More.add("(min-width: 769px)", () => {
  // 더보기 뒤 애니메이션들
  gsap.set(".more_img_wrap", { opacity: 0, display: "none" });
  gsap.set(".more_img_wrap img", { y: 20, x: 0 });

  document.querySelector(".more a").addEventListener("mouseenter", () => {
    gsap.set(".more_img_wrap", { display: "flex" });
    gsap.set(".more_img_wrap img", { y: 20, x: 0 });

    gsap.to(".more_img_wrap", {
      opacity: 1,
      y: -60,
      duration: 0.5,
      ease: "power3.inOut",
    });

    // 캐릭터들
    gsap.to(".more_img_wrap .image2, .more_img_wrap .image4", {
      opacity: 1,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: {
        amount: 0.02,
        from: "random",
      },
      scale: () => Math.random() * 0.2 + 0.6,
      y: () => Math.random() * -50 + 25,
      x: () => Math.random() * 10 - 10,
      rotate: () => Math.random() * 20,
    });

    // 콘페티들
    gsap.to(
      ".more_img_wrap .image1, .more_img_wrap .image3, .more_img_wrap .image5",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
          from: "random",
        },
        scale: () => Math.random() * 0.4 + 0.2,
        y: () => Math.random() * -20 + 20,
        x: () => Math.random() * 30 - 30,
        rotate: () => Math.random() * 360,
      }
    );
  });

  // 마우스 아웃
  document.querySelector(".more a").addEventListener("mouseleave", () => {
    gsap.to(".more_img_wrap .image", {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      stagger: {
        amount: 0.1,
        from: "random",
      },
      y: 0,
      x: 0,
      scale: 0,
    });

    gsap.to(".more_img_wrap", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(".more_img_wrap", { display: "none" });
      },
    });
  });
});
// -------------------------------------------------------------------------------

// sec4 텍스트 움직임
gsap.set(".sec4 p", { x: -1000, opacity: 0 });

gsap.to(".sec4 p", {
  scrollTrigger: {
    trigger: ".sec4",
    start: "bottom 100%", // sec4가 화면에 나타날 때 실행
    end: "bottom 100%",
    scrub: 3,
    // markers: true,
  },
  x: 0,
  opacity: 1,
  duration: 3,
  ease: "elastic",
});
