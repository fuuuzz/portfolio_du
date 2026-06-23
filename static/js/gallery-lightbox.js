(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".project-gallery");
    if (!gallery) return;

    const triggers = gallery.querySelectorAll(".gallery-item:not(.gallery-file)");
    if (!triggers.length) return;

    const images = Array.from(triggers).map(function (trigger) {
      return {
        src: trigger.dataset.gallerySrc || "",
        alt: trigger.dataset.galleryLabel || "",
      };
    });

    let currentIndex = 0;
    let lastFocus = null;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.id = "gallery-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image agrandie");
    lightbox.hidden = true;
    lightbox.innerHTML =
      '<div class="lightbox-backdrop" data-lightbox-close></div>' +
      '<div class="lightbox-panel card-glow">' +
      '<button type="button" class="lightbox-close" data-lightbox-close aria-label="Fermer">×</button>' +
      '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Image précédente">‹</button>' +
      '<figure class="lightbox-figure">' +
      '<img class="lightbox-image" src="" alt="">' +
      '<figcaption class="lightbox-caption" hidden></figcaption>' +
      "</figure>" +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="Image suivante">›</button>' +
      '<p class="lightbox-counter" aria-live="polite"></p>' +
      "</div>";

    document.body.appendChild(lightbox);

    const imageEl = lightbox.querySelector(".lightbox-image");
    const captionEl = lightbox.querySelector(".lightbox-caption");
    const counterEl = lightbox.querySelector(".lightbox-counter");
    const prevBtn = lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox.querySelector(".lightbox-next");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    function updateNav() {
      const hasMultiple = images.length > 1;
      prevBtn.hidden = !hasMultiple;
      nextBtn.hidden = !hasMultiple;
      counterEl.hidden = !hasMultiple;
      if (hasMultiple) {
        counterEl.textContent = currentIndex + 1 + " / " + images.length;
      }
    }

    function showImage(index) {
      currentIndex = (index + images.length) % images.length;
      const item = images[currentIndex];
      imageEl.src = item.src;
      imageEl.alt = item.alt;

      if (item.alt) {
        captionEl.textContent = item.alt;
        captionEl.hidden = false;
      } else {
        captionEl.hidden = true;
      }

      updateNav();
    }

    function open(index) {
      lastFocus = document.activeElement;
      showImage(index);
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      closeBtn.focus();
    }

    function close() {
      lightbox.hidden = true;
      document.body.classList.remove("lightbox-open");
      imageEl.removeAttribute("src");
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener("click", function () {
        open(index);
      });
    });

    prevBtn.addEventListener("click", function () {
      showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
      showImage(currentIndex + 1);
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
      el.addEventListener("click", close);
    });

    lightbox.querySelector(".lightbox-panel").addEventListener("click", function (e) {
      e.stopPropagation();
    });

    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;

      if (e.key === "Escape") {
        close();
      } else if (e.key === "ArrowLeft") {
        showImage(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        showImage(currentIndex + 1);
      }
    });
  });
})();
