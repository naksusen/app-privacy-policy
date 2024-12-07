let lastScrollTop = 0;
const backButton = document.getElementById("backButton");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    backButton.style.display = "none";
  } else {
    if (currentScroll <= 0) {
      backButton.style.display = "block";
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
