import React from "react";
import { StyledSVG } from "./ArrowSVG.styles";

const ArrowSVG = () => (
  <StyledSVG
    className="arrow-over"
    viewBox="0 0 78 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="arrow-line"
      strokeWidth="1.5"
      fill="none"
      stroke="#fa338c"
      d="M0 8h77"
    />
    <path
      className="arrow-linel"
      strokeWidth="1.5"
      fill="none"
      stroke="#fa338c"
      d="M68 15s-.3-6.8 9-7"
    />
    <path
      className="arrow-liner"
      strokeWidth="1.5"
      fill="none"
      stroke="#fa338c"
      d="M68 1s-.3 6.8 9 7"
    />
  </StyledSVG>
);

export default ArrowSVG;
