document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1600px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec1",
          start: "0% 0%",
          end: "20% 5%",
          scrub: 1, // 부드럽게
          // markers: true, // 확인용
        },
      })
      .fromTo(
        ".sec1 .con",
        {
          width: "1600px",
          height: "600px",
        },
        {
          width: "100vw", // 화면을 가득 채우도록
          height: "100vh",
          borderRadius: "0px", // 모서리 없애기
          ease: "power2.out",
        }
      );
  });

  mm.add("(max-width: 1599px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec1",
          start: "0% 0%",
          end: "20% 5%",
          scrub: 1, // 부드럽게
          // markers: true, // 확인용
        },
      })
      .fromTo(
        ".sec1 .con",
        {
          width: "90%",
          height: "500px",
        },
        {
          width: "100vw", // 화면을 가득 채우도록
          height: "100vh",
          borderRadius: "0px", // 모서리 없애기
          ease: "power2.out",
        }
      );
  });
});
