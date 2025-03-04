document.querySelectorAll("#gnb > ul > li").forEach((item) => {
  item.addEventListener("click", (e) => {
    // 기존 active 해제
    document.querySelectorAll("#gnb > ul > li").forEach((el) => {
      el.classList.remove("active");
    });

    // 클릭한 요소에 active 추가
    item.classList.add("active");
  });

  // 마우스가 떠났을 때 hover 해제 방지
  item.addEventListener("mouseenter", () => {
    document.querySelectorAll("#gnb > ul > li").forEach((el) => {
      if (!el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  });
});
