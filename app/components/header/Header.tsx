import React, { useEffect, useRef, useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Navbar from "../navbar/Navbar";
import {
  DesktopHeaderWrapper,
  MobileHeaderWrapper,
  StyledHeader,
  StyledHeading,
} from "./Header.styles";

const Items = [
  {
    name: "home",
    href: "/",
    isTargetBlank: false,
  },
  {
    name: "projects",
    href: "/projects",
    isTargetBlank: false,
  },
  {
    name: "CV",
    href: "/files/Giulia-Mummolo-CV.pdf",
    isTargetBlank: true,
  },
];

const Header = ({ currentPath }) => {
  const isHomePage = currentPath == "/";

  return (
    <StyledHeader showBoxShadow={!isHomePage}>
      <MobileHeaderWrapper>
        <BurgerMenu items={Items} />
        {!isHomePage && <StyledHeading>Giulia Mummolo</StyledHeading>}
      </MobileHeaderWrapper>

      <DesktopHeaderWrapper>
        <hr />
        <Navbar items={Items} />
      </DesktopHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
