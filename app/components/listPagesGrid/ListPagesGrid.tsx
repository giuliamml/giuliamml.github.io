"use client";
import React from "react";
import Image from "next/image";
import {
  ContentWrapper,
  ImageWrapper,
  ProjectWrapper,
  TextWrapper,
  Wrapper,
} from "./ListPagesGrid.styles";
import ArrowSVG from "./assets/ArrowSVG";
import Link from "next/link";

const ListPagesGrid = (props) => {
  const { projects } = props;

  return (
    <Wrapper>
      {projects.map(({ image, category, name, slug }, i) => {
        return (
          <ProjectWrapper key={i}>
            <Link
              id="clickable"
              href={`https://projects.giuliamummolo.com/${slug}`}
            >
              <ContentWrapper>
                <ImageWrapper>
                  <Image src={image.src} alt={image.alt} fill />
                </ImageWrapper>

                <TextWrapper>
                  <h3>{category}</h3>
                  <h1>{name}</h1>

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
