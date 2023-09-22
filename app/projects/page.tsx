import React from "react";
import ListPagesGrid from "../components/listPagesGrid/ListPagesGrid";

const projects = [
  {
    name: "The Clothing Loop",
    category: "Web Development",
    slug: "clothing-loop-development",
    image: {
      src: "/assets/main-tcl-img.png",
      alt: "The Clothing Loop",
    },
  },
  {
    name: "The Clothing Loop",
    category: "UI  Design",
    slug: "clothing-loop-design",
    image: {
      src: "/assets/TCL-design.png",
      alt: "The Clothing Loop design",
    },
  },
  {
    name: "A Collection of App Prototypes",
    category: "Web Development",
    slug: "collection-of-prototypes",
    image: {
      src: "/assets/rest-app.png",
      alt: "Restaurant app prototype",
    },
  },
];

export default function Projects() {
  return (
    <>
      <ListPagesGrid projects={projects} />
    </>
  );
}
