/* ========= 라이트박스 ========= */
let pic = document.getElementsByClassName("pic"); // 썸네일들 (6장)
let lightBox = document.getElementById("light_box"); // 라이트박스 영역
let lightBoxImg = document.getElementById("light_box_img"); // 라이트박스 안의 이미지

// 썸네일 6장에 이벤트를 적용
for (let i = 0; i < pic.length; i++) {
  pic[i].addEventListener("click", showLightBox);
}

// 썸네일을 클릭하면 실행할 이벤트
function showLightBox() {
  let bigLocation = this.getAttribute("data-src"); // 썸네일 이미지에 해당하는 큰 이미지 경로를 가져옴

  // 라이트박스 안의 큰 이미지의 경로를 data-src의 경로로 변경
  lightBoxImg.setAttribute("src", bigLocation);

  // display:none 해둔 라이트박스를 다시 보여주기
  lightBox.style.display = "flex";
}

// 라이트박스 다시 감추기
lightBox.onclick = function () {
  lightBox.style.display = "none";
};

/* ========= 서브메뉴 클릭시 각 내용변경 ========= */
document.addEventListener("DOMContentLoaded", function () {
  // 모든 content_wrap 숨기기
  let allContent = document.querySelectorAll(".content_wrap");
  allContent.forEach((content) => (content.style.display = "none"));

  // 각 메뉴 버튼에 클릭 이벤트 추가
  document.querySelectorAll(".submenu a").forEach((chip, index) => {
    chip.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작 방지

      // 모든 content_wrap 숨기기
      allContent.forEach((content) => (content.style.display = "none"));

      // 해당하는 content_wrap 보이게 하기
      let targetContent = document.querySelector(`.submenu${index + 1}`);
      if (targetContent) {
        targetContent.style.display = "flex";
      }
    });
  });

  // 기본으로 첫 번째 컨텐츠 보이게 설정
  document.querySelector(".submenu1").style.display = "flex";
});
