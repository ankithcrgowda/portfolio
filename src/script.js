(function () {
  "use strict";

  // Function to update active state for navbar links
  const updateNavbarLinks = () => {
    let navbarlinks = document.querySelectorAll("#navbar .scrollto");
    navbarlinks.forEach((navbarlink) => {
      navbarlink.addEventListener("click", function () {
        navbarlinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  };

  // Function to update active state based on scroll position
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    let navbarlinks = document.querySelectorAll("#navbar .scrollto");
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlinks.forEach((link) => link.classList.remove("active"));
        navbarlink.classList.add("active");
      }
    });
  };

  // Initialize Typed.js
  new Typed(".typed", {
    strings: [
      "Web Development",
      "Game Development",
      "UI/UX Design",
      "Graphic Design",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });

  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: false,
  });

  // Call the function to update navbar links
  updateNavbarLinks();

  // Call the function to update active state based on scroll position
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);
})();
