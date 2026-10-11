document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  const closeMenu = () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("is-open");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const formatSelect = document.getElementById("format-select");
  document.querySelectorAll("[data-format]").forEach((link) => {
    link.addEventListener("click", () => {
      if (formatSelect) formatSelect.value = link.dataset.format;
    });
  });

  const form = document.getElementById("franchise-form");
  const formMessage = document.getElementById("form-message");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (formMessage) {
      formMessage.textContent = "Demo preview complete. Your details were not sent or stored.";
      formMessage.setAttribute("role", "status");
    }
  });
});
