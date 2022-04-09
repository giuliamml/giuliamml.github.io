window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  anchor.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add("is-active");

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  });

};
