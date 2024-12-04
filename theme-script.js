document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
  const themeIcon = document.getElementById("theme-icon");
  const themeIconDesktop = document.getElementById("theme-icon-desktop");
  const htmlElement = document.documentElement;

  // theme toggling function
  function toggleTheme(icon) {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      icon.innerHTML = `
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"
          />
        `;
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      icon.innerHTML = `
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        `;
    }
  }

  // theme preference or default to light
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
    themeIcon.innerHTML = `
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      `;
    themeIconDesktop.innerHTML = themeIcon.innerHTML;
  }

  themeToggle.addEventListener("click", () => toggleTheme(themeIcon));
  themeToggleDesktop.addEventListener("click", () =>
    toggleTheme(themeIconDesktop)
  );

  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  });

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
  });
});
