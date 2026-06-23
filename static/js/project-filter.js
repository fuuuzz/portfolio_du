(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const toolbar = document.querySelector(".project-filter");
    const grid = document.querySelector(".project-grid--filterable");
    const emptyMsg = document.getElementById("project-filter-empty");
    if (!toolbar || !grid) return;

    const items = grid.querySelectorAll(".project-item");
    const buttons = toolbar.querySelectorAll(".project-filter-btn");

    function applyFilter(blocId) {
      let visible = 0;

      items.forEach(function (item) {
        const blocs = (item.getAttribute("data-blocs") || "")
          .split(/\s+/)
          .filter(Boolean);
        const show = blocId === "all" || blocs.includes(blocId);
        item.hidden = !show;
        if (show) visible++;
      });

      if (emptyMsg) {
        emptyMsg.hidden = visible > 0;
      }
    }

    function setActive(btn) {
      buttons.forEach(function (b) {
        const isActive = b === btn;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    }

    toolbar.addEventListener("click", function (e) {
      const btn = e.target.closest(".project-filter-btn");
      if (!btn) return;
      btn.blur();
      setActive(btn);
      applyFilter(btn.getAttribute("data-bloc-filter"));
    });
  });
})();
