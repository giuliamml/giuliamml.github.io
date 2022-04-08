window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    console.log("🚀 ~ file: pageTransition.js ~ line 12 ~ anchor", anchor);

    // anchor.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   let target = e.target.href;
    //   console.log(
    //     "🚀 ~ file: pageTransition.js ~ line 16 ~ anchor.addEventListener ~ target",
    //     target
    //   );

    //   transition_el.classList.add("is-active");

    //   setInterval(() => {
    //     window.location.href = target;
    //   }, 500);
    // });
  }
};
