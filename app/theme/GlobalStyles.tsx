import React from "react";
import { Global, css } from "@emotion/react";
import theme from "./";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "areminiscentsmile";
          src: url("/fonts/areminiscentsmile-Regular.ttf") format("opentype");
        }

        @font-face {
          font-family: "Messina Sans";
          src: url("/fonts/MessinaSans-Regular.ttf") format("opentype");
        }

        @font-face {
          font-family: "HKGrotesk";
          src: url("/fonts/HKGrotesk-Regular.otf") format("opentype");
        }

        @font-face {
          font-family: "PPMonumentExtended";
          src: url("/fonts/PPMonumentExtended-Regular.otf") format("truetype");
        }

        @font-face {
          font-family: "Metropolis";
          src: url("/fonts/Metropolis-Regular.otf") format("truetype");
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          margin: 0;
          height: 100vh;
          overflow: hidden;
          overflow-y: scroll;
          background-color: ${theme.colors.backgroundColor};
          font-size: 1rem;
          font-family: "Metropolis";
        }

        h1 {
          font-family: "PPMonumentExtended", sans-serif;
        }

        a {
          text-transform: uppercase;
          color: ${theme.colors.secondary};
          text-decoration: none;
        }

        p {
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5rem;
          letter-spacing: 0.04rem;
          color: ${theme.colors.secondary};
        }
      `}
    />
  );
};
