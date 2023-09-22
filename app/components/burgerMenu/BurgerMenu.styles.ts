import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";

type BurgerMenuContainerType = {
  isMenuOpen: boolean;
};

export const BurgerMenuContainer = styled.div<BurgerMenuContainerType>`
  display: inline-block;
  cursor: pointer;
  top: 20px;
  left: 20px;
  position: absolute;
  z-index: 999999999;

  .bar1 {
    width: 35px;
    height: 1px;
    background-color: ${theme.colors.secondary};
    margin: 6px 0;
    transition: 0.4s;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none"};
  }

  .bar2 {
    width: 35px;
    height: 1px;
    background-color: ${theme.colors.secondary};
    margin: 6px 0;
    transition: 0.4s;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
  }

  .bar3 {
    width: 35px;
    height: 1px;
    background-color: ${theme.colors.secondary};
    margin: 6px 0;
    transition: 0.4s;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg) translate(-5px, -6px)" : "none"};
  }
`;

const slideIn = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

export const BurgerMenuItems = styled.div`
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  position: absolute;
  list-style-type: none;
  padding-inline: 5rem;
  animation: ${slideIn} 1s;
  background-color: ${theme.colors.backgroundColor};
  height: 100vh;
  width: 100vw;

  ul {
    list-style: none;
    margin-top: 5rem;

    li {
      text-align: left;
      margin-bottom: 40px;

      span {
        display: block;
        color: $secondary;
        font-family: $text-heading;
        position: relative;
        text-align: left;
      }

      a {
        position: relative;
        display: inline;
        color: $primary;
        font-size: 2rem;
        line-height: 1;
        text-decoration: none;
      }

      a.active {
        text-decoration: underline;
      }
    }
  }
`;
