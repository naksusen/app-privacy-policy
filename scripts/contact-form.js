document.addEventListener("DOMContentLoaded", () => {
  // contact form functionality
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
    form.reset();
  });

  function closeModal() {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };
});
