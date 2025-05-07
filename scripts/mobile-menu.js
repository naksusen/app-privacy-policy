document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenuContent = mobileMenu.querySelector("div");

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    mobileMenu.offsetHeight;
    mobileMenuContent.classList.remove("-translate-x-full");
  });

  mobileMenuClose.addEventListener("click", function () {
    mobileMenuContent.classList.add("-translate-x-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  });

  // close menu when clicking outside
  mobileMenu.addEventListener("click", function (e) {
    if (e.target === mobileMenu) {
      mobileMenuContent.classList.add("-translate-x-full");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  });
});
