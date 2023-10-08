import React from "react";
import { Item, ListContainer } from "./Navbar.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Item = {
  name: string;
  href: string;
  isTargetBlank: boolean;
  iconPath?: string;
};

type PopsType = {
  items: Item[];
  isTargetBlank?: boolean;
};

const Navbar = (props: PopsType) => {
  const { items } = props;

  const currentPath = usePathname();

  return (
    <ListContainer>
      {items.map(({ href, isTargetBlank, name, iconPath }, i) => (
        <Item
          isBurgerMenu
          key={i}
          isActive={href === currentPath}
          delay={`${i * 0.3}s`}
        >
          <Link href={href} target={isTargetBlank ? "_blank" : "_self"}>
            {iconPath ? (
              <Image
                src={iconPath}
                width={30}
                height={30}
                alt={`${name}-logo`}
              />
            ) : (
              <> {name}</>
            )}
          </Link>
        </Item>
      ))}
    </ListContainer>
  );
};

export default Navbar;
