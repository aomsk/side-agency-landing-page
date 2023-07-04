hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  responsive_navbar = document.querySelector(".responsive_navbar");
  text = document.querySelector(".text");
  console.log("hamburger clicked");
  responsive_navbar.classList.toggle("active");
  text.classList.toggle("active");
};
