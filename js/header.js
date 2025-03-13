document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 불러오기

  // header
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header", // 어느 영역에서 스크롤트리거를 발생시킬건지
        start: "100% 0%", // 첫번째 값은 요소의 top 위치, 두번째 값은 뷰포트의 top위치 이 두선이 만나면 애니메이션 동작
        end: "100% 5%", // 첫번째 값은 요소의 bottom 위치, 두번째 값은 뷰포트의 50%위치 이 두선이 만나면 애니메이션 동작
        scrub: 1, // 되감기+움직임을 부드럽게 만들어줌(숫자가 높을수록 부드러운 느낌)
        duration: 0.3, // 요소가 변할때 소요되는 시간
        // markers: true,
      },
    })
    .to("header", {
      // 끝날때
      backgroundColor: "rgba(253, 251, 245, 0.5)",
    });
});
