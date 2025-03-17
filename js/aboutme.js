// 아코디언

document.querySelectorAll(".accordion_more").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const experience = this.closest(
      ".experience, .social, .edu, .qualifications, .skill"
    ); // 클릭한 버튼의 부모 .experience 찾기
    experience.classList.toggle("active");
  });
});

// -------------------------------------------------------------------------------

let breakpoint = gsap.matchMedia();
breakpoint.add("(min-width: 769px)", () => {
  // sec2 텍스트 움직임
  gsap.set(".sec2 p", { x: -1000, opacity: 0 });

  gsap.to(".sec2 p", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "bottom 100%", // sec2가 화면에 나타날 때 실행
      end: "bottom 100%",
      scrub: 3,
      // markers: true,
    },
    x: 0,
    opacity: 1,
    duration: 3,
    ease: "elastic",
  });
});
