(() => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    const setOpen = (open) => {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
      nav.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };

    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      setOpen(!expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        navToggle.focus();
      }
    });
  }

  // Lightbox for before/after therapy photos
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox && typeof lightbox.showModal === "function") {
    const lbImg = lightbox.querySelector(".lightbox-img");
    const lbCaption = lightbox.querySelector(".lightbox-caption");
    const lbClose = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const src = trigger.getAttribute("data-lightbox-src");
        const caption = trigger.getAttribute("data-lightbox-caption") || "";
        if (!src || !lbImg) return;
        lbImg.src = src;
        lbImg.alt = caption;
        if (lbCaption) lbCaption.textContent = caption;
        lightbox.showModal();
      });
    });

    if (lbClose) {
      lbClose.addEventListener("click", () => lightbox.close());
    }

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });
  }
})();
