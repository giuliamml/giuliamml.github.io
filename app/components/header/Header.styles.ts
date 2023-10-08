import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";
import Navbar from "../navbar/Navbar";

type Header = {
  showBoxShadow: boolean;
};

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const StyledHeader = styled.header<Header>`
  max-height: 12vh;
  display: sticky;
  z-index: 1;
  background-color: ${theme.colors.backgroundColor};
  box-shadow: ${(props) =>
    props.showBoxShadow ? " 0px 5px 10px 0px rgba(0, 0, 0, 0.3)" : "none"};
`;

export const MobileHeaderWrapper = styled.div`
  justify-content: center;
  padding-inline: 2rem;
  padding-block: 1.5rem;
  position: relative;
  top: 0;
  align-items: center;
  display: none;
  z-index: 9;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 1.5rem;
  font-family: "Metropolis";
  color: ${theme.colors.secondary};
  margin-block: 1.3rem;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 2rem;
  padding-block: 1.5rem;
  position: relative;
  position: sticky;
  top: 0;
  align-items: center;
  width: 100%;

  hr {
    margin-inline: 1rem;
    background-color: ${theme.colors.secondary};
    height: 0.05rem;
    border: none;
    width: 100%;
    animation: ${slideInFromLeft} 1s ease-in-out forwards;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
