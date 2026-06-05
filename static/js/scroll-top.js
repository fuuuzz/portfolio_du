(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("scroll-top");
    if (!btn) return;

    function toggleVisibility() {
      if (window.scrollY > 400) {
        btn.hidden = false;
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
        btn.hidden = true;
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
