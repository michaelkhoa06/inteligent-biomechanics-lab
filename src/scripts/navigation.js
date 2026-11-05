function updateScrollState() {
  document.body.classList.toggle("scroll", window.scrollY >= 100);
}

document.addEventListener("scroll", updateScrollState, { passive: true });

document.addEventListener("astro:page-load", () => {
  const navigation = document.getElementById("cs-navigation");
  const toggle = navigation?.querySelector(".cs-toggle");
  if (!toggle) return;

  document.body.classList.remove("cs-open");
  updateScrollState();

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.classList.toggle("cs-active", expanded);
    navigation.classList.toggle("cs-active", expanded);
    document.body.classList.toggle("cs-open", expanded);
  });
});
