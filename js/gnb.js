document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#gnb > ul > li > a");
  const logo = document.querySelector("h1 a"); // 로고의 a 태그 선택

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

  // 로고 클릭 시 active 상태 초기화
  if (logo) {
    logo.addEventListener("click", function () {
      // 로고 클릭 시 active 상태 초기화
      menuItems.forEach((el) => el.parentElement.classList.remove("active"));
      localStorage.removeItem("activeMenu"); // 로컬스토리지에서 activeMenu 삭제
    });
  }
});
