document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
  const themeIcon = document.getElementById("theme-icon");
  const themeIconDesktop = document.getElementById("theme-icon-desktop");
  const htmlElement = document.documentElement;

  function setTheme(isDark) {
    if (isDark) {
      htmlElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      updateThemeIcons(true);
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      updateThemeIcons(false);
    }
  }

  function updateThemeIcons(isDark) {
    const moonPath = `
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    `;
    const sunPath = `
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"
      />
    `;

    const allThemeIcons = document.querySelectorAll('[id^="theme-icon"]');
    allThemeIcons.forEach((icon) => {
      icon.innerHTML = isDark ? moonPath : sunPath;
    });
  }

  // theme toggle function
  function toggleTheme() {
    const isDark = !htmlElement.classList.contains("dark");
    setTheme(isDark);
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem("color-theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark =
      savedTheme === "dark" || (savedTheme === null && systemPrefersDark);

    setTheme(isDark);
  }

  const themeToggleButtons = [themeToggle, themeToggleDesktop].filter(Boolean);

  themeToggleButtons.forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });

  initializeTheme();

  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuToggle && mobileMenuClose && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
    });

    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("flex");
      mobileMenu.classList.add("hidden");
    });
  }
});
