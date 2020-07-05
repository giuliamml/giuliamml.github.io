const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("project");

let id = myParam;

console.log(projects);

let project = projects.find((el) => el.id === 2);
console.log(project);

const title = document.querySelector("h1");
title.innerText = project.name;

const description = document.querySelector("h3");
description.innerText = project.description;

const technologies = document.querySelector("p#technologies");
technologies.innerText = project.technologies;

const type = document.querySelector("p#type");
type.innerText = project.type;

const backBtn = document.querySelector("button.back");
backBtn.addEventListener("click", (e) =>
  window.location.replace("./projects.html")
);
