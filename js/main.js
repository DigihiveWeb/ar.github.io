// var toggle = document.getElementById("toggle");
// var item = document.getElementsByClassName("item");

// toggle.addEventListener("click", (e) => {
//   Array.from(item).forEach((v) => v.classList.toggle("active"));
// });

const navslider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // animate links

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

const app = () => {
  navslider();
};

app();
