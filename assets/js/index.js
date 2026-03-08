const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.dataset.navLink;

    // Remove active from all
    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("page-active"));

    // Add active to clicked
    this.classList.add("active");

    // Activate matching page
    document
      .querySelector(`[data-page="${targetPage}"]`)
      .classList.add("page-active");
  });
});

// // Mobile View Btns

const btnLinks = document.querySelectorAll("[data-btn-link]");
const mobilePages = document.querySelectorAll("[data-page]");

btnLinks.forEach((button) => {
  button.addEventListener("click", function () {
    const targetPage = this.dataset.btnLink;

    // Remove active
    btnLinks.forEach((btn) => btn.classList.remove("active"));
    mobilePages.forEach((page) => page.classList.remove("page-active"));

    // Add active
    this.classList.add("active");

    document
      .querySelector(`[data-page="${targetPage}"]`)
      .classList.add("page-active");
  });
});

const showUp = document.querySelector(".contact-info");
const personal = document.querySelector(".information");

showUp.addEventListener("click", () => {
  showUp.classList.toggle("action");
  personal.classList.toggle("action");
});

/* Filterable Image Gallery */

const filterButtons = document.querySelectorAll(".filter-btns .btn");
const galleryItems = document.querySelectorAll(".gallery-item");

const animations = ["fadeInUp", "zoomIn", "rotateIn", "slideInLeft"];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Change active button
    document.querySelector(".filter-btns .active").classList.remove("active");
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      // Remove old animation classes
      item.classList.remove(
        "fadeInUp",
        "zoomIn",
        "rotateIn",
        "slideInLeft",
        "animate",
      );

      if (filterValue === "all" || item.dataset.category === filterValue) {
        item.classList.remove("hide");

        // Pick random animation
        const randomAnimation =
          animations[Math.floor(Math.random() * animations.length)];

        item.classList.add("animate", randomAnimation);
      } else {
        item.classList.add("hide");
      }
    });
  });
});

