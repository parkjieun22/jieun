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

// =========================================================================================

// document.addEventListener("DOMContentLoaded", function () {
//   const menuItems = document.querySelectorAll("#gnb > ul > li");

//   // 페이지 로드 시, URL에 맞는 메뉴 항목을 찾아 active 클래스 추가
//   const currentUrl = window.location.pathname;
//   menuItems.forEach((item) => {
//     const link = item.querySelector("a");
//     if (link && currentUrl.includes(link.getAttribute("href"))) {
//       item.classList.add("active");
//     }
//   });

//   // 메뉴 클릭 시 active 상태 변경 및 localStorage에 저장
//   menuItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       // 모든 메뉴에서 active 제거
//       menuItems.forEach((el) => el.classList.remove("active"));

//       // 클릭한 메뉴에 active 추가
//       this.classList.add("active");

//       // localStorage에 저장 (a 태그의 href 값 저장)
//       const menuHref = this.querySelector("a").getAttribute("href");
//       localStorage.setItem("activeMenu", menuHref);
//     });
//   });

//   // 기존에 저장된 active 메뉴가 있으면 불러오기
//   const savedActive = localStorage.getItem("activeMenu");
//   if (savedActive) {
//     menuItems.forEach((item) => {
//       const link = item.querySelector("a");
//       if (link && link.getAttribute("href") === savedActive) {
//         item.classList.add("active");
//       }
//     });
//   }
// });
