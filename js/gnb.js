document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#gnb > ul > li");

  // 기존에 저장된 active 메뉴가 있으면 불러오기
  const savedActive = localStorage.getItem("activeMenu");
  if (savedActive) {
    document.getElementById(savedActive)?.parentElement.classList.add("active");
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // 모든 메뉴에서 active 제거
      menuItems.forEach((el) => el.classList.remove("active"));

      // 클릭한 메뉴에 active 추가
      this.classList.add("active");

      // localStorage에 저장 (a 태그의 ID 저장)
      const menuId = this.querySelector("a").id;
      localStorage.setItem("activeMenu", menuId);
    });
  });
});
