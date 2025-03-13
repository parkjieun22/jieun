document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#gnb > ul > li > a");
  const logo = document.querySelector("h1 a"); // 로고의 a 태그 선택
  const moreButton = document.querySelector(".more a"); // "작업 더 보기" 버튼

  // 기존에 저장된 active 메뉴가 있으면 불러오기
  const savedActive = localStorage.getItem("activeMenu");
  if (savedActive) {
    document.getElementById(savedActive)?.parentElement.classList.add("active");
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // 모든 메뉴에서 active 제거
      menuItems.forEach((el) => el.parentElement.classList.remove("active"));

      // 클릭한 메뉴에 active 추가
      this.parentElement.classList.add("active");

      // localStorage에 저장 (a 태그의 ID 저장)
      const menuId = this.id;
      localStorage.setItem("activeMenu", menuId);
    });
  });

  // 작업 더 보기 버튼 클릭 시 Work 메뉴 활성화
  if (moreButton) {
    moreButton.addEventListener("click", () => {
      localStorage.setItem("activeMenu", "work"); // Work 메뉴 활성화
    });
  }

  // 로고 클릭 시 active 상태 초기화 + 글자 색 변경
  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 이동 방지
      menuItems.forEach((el) => el.parentElement.classList.remove("active")); // active 제거
      localStorage.removeItem("activeMenu");

      menuItems.forEach((el) => {
        el.style.color = "black";
      });
      location.href = "/"; // 메인 페이지로 이동
    });
  }
});
