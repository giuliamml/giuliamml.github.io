import React, { useEffect, useRef, useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Navbar from "../navbar/Navbar";
import { StyledHeader, StyledHeading } from "./Header.styles";

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
  const ref = useRef<HTMLElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    if (typeof window !== "undefined" && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (typeof window !== "undefined" && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const isMobile = width <= 768;
  const isHomePage = currentPath == "/";

  return (
    <StyledHeader ref={ref} showBoxShadow={!isHomePage}>
      {isMobile ? (
        <>
          <BurgerMenu items={Items} />
          {!isHomePage && <StyledHeading>Giulia Mummolo</StyledHeading>}
        </>
      ) : (
        <>
          <hr />
          <Navbar items={Items} />
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
