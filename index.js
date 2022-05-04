//header shadow
function handleHeaderShadow() {
  document.addEventListener("scroll", function (e) {
    const header = document.querySelector(".header");
    const name = document.querySelector("a.name");

    if (header.offsetTop !== 0) {
      if (!header.classList.contains("shadow")) {
        header.classList.add("shadow");
        name.classList.add("visible");
      }
    } else {
      header.classList.remove("shadow");
      name.classList.remove("visible");
    }
  });
}

handleHeaderShadow();

function handleActiveMenuItem() {
  const items = document.querySelectorAll("ul.header-nav-bar li a");

  items.forEach((item) =>
    item.addEventListener("click", function (e) {
      items.forEach((item) => item.classList.remove("active"));

      e.target.classList.add("active");
    })
  );
}

document.addEventListener("DOMContentLoaded", function () {
  handleActiveMenuItem();
});

//burger-menu-logic
function menuOpen() {
  let burgerMenu = document.querySelector("div#burger-menu-container");
  let burgerMenuItems = document.querySelector("div.burger-menu-items");

  burgerMenu.classList.toggle("change");

  if (burgerMenu.className === "") {
    burgerMenuItems.style.display = "none";
  } else if (burgerMenu.className === "change") {
    burgerMenuItems.style.display = "flex";
    burgerMenuItems.style.flexDirection = "column";
    burgerMenuItems.style.width = "100vw";
    burgerMenuItems.style.height = "100vh";
    burgerMenuItems.style.position = "absolute";
    burgerMenuItems.style.zIndex = "111111111";
    burgerMenuItems.style.background = "#fd89b2";
    burgerMenuItems.style.boxheader = "7px 0px 15px 0px #00000036";
    burgerMenuItems.style.borderRight = "1px solid #ffb2d1";
    burgerMenuItems.style.top = "0";
    burgerMenuItems.style.left = "0";
  }
}

//page transition
window.onload = () => {
  const anchors = document.querySelectorAll("a#clickable");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      let target = e.target.href;

      transition_el.classList.add("is-active");

      return setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  });
};

//progress bar
const scrollBarAnimation = () => {
  let scrollTop = window.scrollY;
  let viewportHeight = document.body.clientHeight - window.innerHeight;
  let scrollPercent = (scrollTop / viewportHeight) * 100;
  let progressBar = document.querySelector("#js-progressbar");

  progressBar.setAttribute("value", scrollPercent);

  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY;
    viewportHeight = document.body.clientHeight - window.innerHeight;
    scrollPercent = (scrollTop / viewportHeight) * 100;
    progressBar.setAttribute("value", scrollPercent);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  scrollBarAnimation();
});

const revealElements = document.querySelectorAll(".section-title");
const fadeElements = document.querySelectorAll(".section-desc");
const fadeDiv = document.querySelectorAll(".skills");
const fadeProject = document.querySelectorAll(".project");
const revealSkills = document.querySelectorAll(".skill");
const rotateSvg = document.querySelectorAll(".toAnimate");

const scrollAnim = () => {
  let windowHt = window.innerHeight;
  revealElements.forEach((elements) => {
    let elementPos = elements.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      elements.classList.add("revealed");
    }
  });
  fadeElements.forEach((element) => {
    let elementPos = element.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      element.classList.add("faded-in");
    }
  });

  fadeDiv.forEach((element) => {
    let elementPos = element.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      element.classList.add("slide");
    }
  });

  fadeProject.forEach((element) => {
    let elementPos = element.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      element.classList.add("fade-up");
    }
  });

  revealSkills.forEach((element) => {
    let elementPos = element.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      element.classList.add("reveal-right");
    }
  });

  rotateSvg.forEach((element) => {
    let elementPos = element.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      element.classList.add("active");
    }
  });
};

document.addEventListener("DOMContentLoaded", scrollAnim);

window.addEventListener("scroll", scrollAnim);
