import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";

type BurgerMenuItemsType = {
  isMenuOpen: boolean;
};

export const BurgerMenuContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  top: 20px;
  left: 20px;
  position: absolute;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const IconWrapper = styled.button`
  border: none;
  background-color: transparent;

  &.close-icon {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const BurgerMenuItems = styled.div<BurgerMenuItemsType>`
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  position: absolute;
  list-style-type: none;
  padding-inline: 5rem;
  background-color: ${theme.colors.backgroundColor};
  height: 100vh;
  width: 100vw;

  ul {
    list-style: none;
    margin-top: 8rem;

    li {
      text-align: center;
      margin-bottom: 40px;

      span {
        display: block;
        position: relative;
        text-align: left;
      }

      a {
        position: relative;
        display: inline;
        font-size: 2rem;
        line-height: 1;
        text-decoration: none;
      }
    }

    &:nth-of-type(2) {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const StyledHeading = styled.h1`
  font-size: 1.5rem;
  font-family: "Metropolis";
  color: ${theme.colors.secondary};
  margin-block: 1.3rem;
  text-transform: uppercase;
`;
