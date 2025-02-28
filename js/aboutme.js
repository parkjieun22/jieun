document.querySelector(".view1 a").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".view1").classList.toggle("active");
});

document.querySelector(".view2 a").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".view2").classList.toggle("active");
});

document.querySelector(".view3 a").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".view3").classList.toggle("active");
});
