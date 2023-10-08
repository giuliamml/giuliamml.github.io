import React, { useState, useEffect } from "react";
import {
  BurgerMenuContainer,
  BurgerMenuItems,
  IconWrapper,
  StyledHeading,
} from "./BurgerMenu.styles";
import { usePathname } from "next/navigation";
import { Item, ListContainer } from "../navbar/Navbar.styles";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import BurgerMenuIcon from "./assets/BurgerMenuIcon";
import theme from "../../theme";
import BurgerMenuCloseIcon from "./assets/BurgerMenuCloseIcon";

const Items = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/giulia-mummolo-1042b798/",
    isTargetBlank: true,
    iconPath: "/assets/icons/linkedin.svg",
  },
  {
    name: "github",
    href: "https://github.com/giuliamml",
    isTargetBlank: true,
    iconPath: "/assets/icons/github.svg",
  },
];

const BurgerMenu = (props) => {
  const { items } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const [previousPath, setPreviousPath] = useState(currentPath);

  const handleMenuChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (currentPath !== previousPath) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 100);
    }

    setPreviousPath(currentPath);
  }, [currentPath, previousPath]);

  return (
    <>
      <BurgerMenuContainer>
        <IconWrapper onClick={handleMenuChange}>
          <BurgerMenuIcon fill={theme.colors.secondary} />
        </IconWrapper>
      </BurgerMenuContainer>

      {isMenuOpen && (
        <>
          <BurgerMenuItems isMenuOpen={isMenuOpen}>
            <IconWrapper className="close-icon" onClick={handleMenuChange}>
              <BurgerMenuCloseIcon fill={theme.colors.secondary} />
            </IconWrapper>

            <ListContainer isBurgerMenu>
              {items.map((item, i) => {
                return (
                  <Item
                    isBurgerMenu
                    key={i}
                    isActive={item.href === currentPath}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Item>
                );
              })}
            </ListContainer>
            <Navbar items={Items} />
          </BurgerMenuItems>
        </>
      )}
    </>
  );
};

export default BurgerMenu;
