
let projectsBtn = document.querySelectorAll("button.project");
console.log(projectsBtn);

projectsBtn.forEach((el) =>
  addEventListener("click", (e) => {
    let id = e.target.id;
    console.log(id);

    window.location.replace(`./project-page.html?project=${id}`);

    return;
  })
);
