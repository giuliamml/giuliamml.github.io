import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from ".";

const slideUp = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}`;

const slideDown = keyframes`
0% {
  transform: translateY(-100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}`;

export const MainContentDescriptionContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  height: 76vh;

  h1 {
    color: ${theme.colors.textColor};
    font-family: "areminiscentsmile";
    font-size: 10vw;
    font-weight: lighter;
    text-align: left;
    position: relative;
    letter-spacing: 10px;
    display: block;
    animation: 1s ease 0.8s 1 ${slideDown};
    animation-fill-mode: forwards;
    opacity: 0;
    text-transform: lowercase;

    &:nth-last-of-type(2) {
      animation: 1s ease 0.5s 1 ${slideDown};
      animation-fill-mode: forwards;
    }

    &:nth-last-of-type(1) {
      text-transform: uppercase;
    }
  }

  p {
    color: ${theme.colors.secondary};
    text-align: left;
    margin-block: 1rem;
    width: 60%;
    display: inline;
    animation: 1s ease 1.5s 1 ${slideUp};
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @media (max-width: 769px) {
    margin-inline: 2rem;
    top: 40%;
    transform: translateY(-50%);

    p {
      width: 100%;
    }
  }
`;
