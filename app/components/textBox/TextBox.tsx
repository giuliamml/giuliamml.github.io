"use client";
import React from "react";
import { Title, Wrapper, Text, StyledLink } from "./TextBox.styles";

const TextBox = ({ content }) => {
  const { title, subtitle, text, link } = content;

  return (
    <Wrapper>
      <Title>
        {title}
        {subtitle && <span>{subtitle}</span>}
      </Title>
      <Text>{text}</Text>
      {link && (
        <StyledLink href={link.href} target="_blank">
          {link.title}
        </StyledLink>
      )}
    </Wrapper>
  );
};

export default TextBox;
