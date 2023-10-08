import React from "react";
import ListPagesGrid from "../components/listPagesGrid/ListPagesGrid";

const projects = [
  {
    name: "Web Development",
    category: "The Clothing Loop",
    slug: "clothing-loop-development",
    image: {
      src: "/assets/main-tcl-img.png",
      alt: "The Clothing Loop",
    },
  },
  {
    name: "UI  Design",
    category: "The Clothing Loop",
    slug: "clothing-loop-design",
    image: {
      src: "/assets/TCL-design.png",
      alt: "The Clothing Loop design",
    },
  },
  {
    name: "Web Development",
    category: "A Collection of App Prototypes",
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
