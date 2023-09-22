import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const StyledHeader = styled.header`
  max-height: 12vh;
  display: flex;
  justify-content: end;
  padding-inline: 2rem;
  padding-block: 2rem;
  position: relative;
  position: sticky;
  top: 0;
  align-items: center;
  z-index: 1;
  background-color: ${theme.colors.backgroundColor};

  hr {
    margin-inline: 1rem;
    background-color: ${theme.colors.secondary};
    height: 0.05rem;
    border: none;
    width: 100%;
    animation: ${slideInFromLeft} 1s ease-in-out forwards;
  }
`;
