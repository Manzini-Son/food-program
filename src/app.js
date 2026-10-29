 const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        navLinks.classList.remove("is-open");
      }
    });

    document.querySelector("#year").textContent = new Date().getFullYear();