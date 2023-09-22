import { useEffect, useRef, useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Navbar from "../navbar/Navbar";
import { StyledHeader } from "./Header.styles";

const Items = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "projects",
    href: "http://projects.giuliamummolo.com/projects/",
  },
];

const Header = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Check if window is defined (client-side)
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

  return (
    <StyledHeader ref={ref}>
      {isMobile ? (
        <BurgerMenu items={Items} />
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
