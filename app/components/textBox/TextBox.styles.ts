import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 76vh;

  @media (max-width: 769px) {
    margin-inline: 3rem;
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 56px;
  font-weight: 400;

  span {
    font-family: "areminiscentsmile";
    text-transform: lowercase;
    margin-inline: 3rem;
    font-size: 8rem;
    display: block;
  }

  @media (max-width: 769px) {
    span {
      margin-inline: 0;
      margin-block: 1rem;
    }
  }
`;

export const Text = styled.p`
  margin-block-start: 5rem;
  margin-block-end: 1rem;
  margin-inline-start: 8rem;
  width: 80%;

  @media (max-width: 769px) {
    margin-inline: 0;
    margin-block-start: 5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  text-decoration: underline;
`;
