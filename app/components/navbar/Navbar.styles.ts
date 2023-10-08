import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";

type ListContainer = {
  isBurgerMenu?: boolean;
};

type Item = {
  delay?: string;
  isActive: boolean;
  isBurgerMenu: boolean;
};

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

export const ListContainer = styled.ul<ListContainer>`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  flex-direction: ${(props) => (props.isBurgerMenu ? "column" : "row")};
`;

export const Item = styled.li<Item>`
  display: inline-block;
  position: relative;
  opacity: ${(props) => (props.isBurgerMenu ? "1" : "0")};
  animation: ${(props) =>
    !props.isBurgerMenu
      ? css`
          ${fadeInFromTop} 0.6s ease forwards
        `
      : "none"};
  animation-delay: ${(props) => `calc(${props.delay || "0s"} + 1s)`};

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${(props) =>
      props.isActive ? theme.colors.salmon : theme.colors.secondary};
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      width: 100%;
      padding-inline: 0.5rem;
      height: 1.5rem;
      border: 1px solid ${theme.colors.salmon};
      border-radius: 50%;
      display: ${(props) => (props.isActive ? "block" : "none")};
      transform: translateY(-50%) rotate(-10deg);
    }
  }
}`;
