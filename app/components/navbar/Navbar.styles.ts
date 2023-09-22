import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  flex-direction: ${(props) => (props.isBurgerMenu ? "column" : "row")};
`;

export const Item = styled.li`
  display: inline-block;
  position: relative;
  opacity: 0;
  animation: ${fadeInFromTop} 0.6s ease forwards;
  animation-delay: ${(props) => `calc(${props.delay || "0s"} + 1s)`};

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.salmon
        : props.theme.colors.secondary};
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      width: 100%;
      padding-inline: 0.5rem;
      height: 1.5rem;
      border: 1px solid ${(props) => props.theme.colors.salmon};
      border-radius: 50%;
      display: ${(props) => (props.isActive ? "block" : "none")};
      transform: translateY(-50%) rotate(-10deg);
    }
  }
`;
