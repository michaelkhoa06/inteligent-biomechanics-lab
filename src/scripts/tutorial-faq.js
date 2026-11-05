document.addEventListener("astro:page-load", () => {
  document.querySelectorAll(".cs-faq-trigger").forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") !== "true";
      const content = trigger.nextElementSibling;
      content.style.maxHeight = expanded ? `${content.scrollHeight}px` : "0";
      content.classList.toggle("expanded", expanded);
      trigger.parentElement.classList.toggle("active", expanded);
      trigger.setAttribute("aria-expanded", String(expanded));
    });
  });
});
