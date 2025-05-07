function setTheme(isDark) {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  localStorage.setItem("darkMode", isDark);

  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    updateThemeIcons(isDark);
  }
}

function updateThemeIcons(isDark) {
  const icons = [
    document.getElementById("theme-icon"),
    document.getElementById("theme-icon-desktop"),
  ];

  icons.forEach((icon) => {
    if (icon) {
      if (isDark) {
        icon.innerHTML = `
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />`;
      } else {
        icon.innerHTML = `
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"
          />`;
      }
    }
  });
}

function initializeTheme() {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode !== null) {
    setTheme(savedDarkMode === "true");
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark);
  }
}

// theme toggle functionality
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // icons
  const sunIcon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
  </svg>`;
  const moonIcon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
  </svg>`;

  document.getElementById("theme-icon").innerHTML = isDark ? sunIcon : moonIcon;
  document.getElementById("theme-icon-desktop").innerHTML = isDark
    ? sunIcon
    : moonIcon;
}

// initialize theme
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
    toggleTheme();
  }

  // click event listeners
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);
  document
    .getElementById("theme-toggle-desktop")
    .addEventListener("click", toggleTheme);
});
