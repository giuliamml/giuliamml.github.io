import React, { useState } from "react";
import { BurgerMenuContainer, BurgerMenuItems } from "./BurgerMenu.styles";
import { usePathname } from "next/navigation";
import { Item, ListContainer } from "../navbar/Navbar.styles";
import Link from "next/link";

const BurgerMenu = (props) => {
  const { items } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const handleMenuChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <BurgerMenuContainer onClick={handleMenuChange} isMenuOpen={isMenuOpen}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </BurgerMenuContainer>

      {isMenuOpen && (
        <BurgerMenuItems>
          <ListContainer isBurgerMenu>
            {items.map((item, i) => {
              return (
                <Item key={i} isActive={item.href === currentPath}>
                  <Link href={item.href} onClick={handleMenuChange}>
                    {item.name}
                  </Link>
                </Item>
              );
            })}
          </ListContainer>
        </BurgerMenuItems>
      )}
    </>
  );
};

export default BurgerMenu;
