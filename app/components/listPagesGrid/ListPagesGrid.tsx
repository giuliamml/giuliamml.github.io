"use client";
import React from "react";
import {
  ContentWrapper,
  ImageWrapper,
  ProjectWrapper,
  TextWrapper,
  Wrapper,
} from "./ListPagesGrid.styles";
import ArrowSVG from "../arrowSVG/ArrowSVG";
import Link from "next/link";

const ListPagesGrid = (props) => {
  const { projects } = props;

  return (
    <Wrapper>
      {projects.map((project, i) => {
        return (
          <ProjectWrapper key={i}>
            <Link
              id="clickable"
              href={`https://projects.giuliamummolo.com/${project.slug}`}
            >
              <ContentWrapper>
                <ImageWrapper>
                  <img src={project.image.src} alt={project.image.alt} />
                </ImageWrapper>

                <TextWrapper>
                  <h3>{project.category}</h3>
                  <h1>{project.name}</h1>

                  <ArrowSVG />
                </TextWrapper>
              </ContentWrapper>
            </Link>
          </ProjectWrapper>
        );
      })}
    </Wrapper>
  );
};

export default ListPagesGrid;
