(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("site-header");
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function syncHeaderHeight() {
      header.style.setProperty("--site-header-height", header.offsetHeight + "px");
    }

    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);

    function setOpen(open) {
      if (open) syncHeaderHeight();
      header.classList.toggle("is-nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      document.body.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-nav-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 769px)").matches) setOpen(false);
    });
  });
})();
