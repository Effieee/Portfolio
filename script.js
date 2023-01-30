"use strict";

const hamburger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }
  });
});
