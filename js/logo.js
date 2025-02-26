// 로고 둥실 효과

"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  function logoMoving() {
    return gsap
      .timeline()
      .to(
        ".logo1",
        {
          y: 10,
          duration: 0.8,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        },
        "+=0"
      )
      .to(
        ".logo2",
        {
          y: 10,
          duration: 0.8,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        },
        "+=0"
      )
      .to(
        ".logo3",
        {
          y: 10,
          duration: 0.8,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        },
        "+=0"
      )
      .to(
        ".logo4",
        {
          y: 10,
          duration: 0.8,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        },
        "+=0"
      )
      .to(
        ".logo5",
        {
          y: 10,
          duration: 0.8,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        },
        "+=0"
      )
      .to(
        ".logo6",
        {
          y: 10,
          duration: 0.8,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        },
        "+=0"
      );
  }
  logoMoving();
});
