// /* Progress bar */
const scrollBarAnimation = () => {
  let scrollTop = window.scrollY;
  let viewportHeight = document.body.clientHeight - window.innerHeight;
  let scrollPercent = (scrollTop / viewportHeight) * 100;
  let progressBar = document.querySelector("#js-progressbar");
  console.log("🚀 ~ file: progressBar.js ~ line 7 ~ scrollBarAnimation ~ progressBar", progressBar)



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
