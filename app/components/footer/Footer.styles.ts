import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }

`;

export const Wrapper = styled.footer`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  color: ${theme.colors.secondary};

  hr {
    margin-inline: 1rem;
    background-color: ${theme.colors.secondary};
    height: 0.05rem;
    border: none;
    animation: ${slideInFromRight} 1s ease-in-out forwards;
  }

  @media (max-width: 830px) {
    display: none;
  }
`;
