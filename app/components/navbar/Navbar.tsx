import React from "react";
import { Item, ListContainer } from "./Navbar.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  name: string;
  href: string;
};

type PopsType = {
  items: Item[];
  isTargetBlank?: boolean;
};

const Navbar = (props: PopsType) => {
  const { items, isTargetBlank } = props;

  const currentPath = usePathname();

  return (
    <ListContainer>
      {items.map((item, i) => (
        <Item
          key={i}
          isActive={item.href === currentPath}
          delay={`${i * 0.3}s`}
        >
          <Link href={item.href} target={isTargetBlank ? "_blank" : "_self"}>
            {item.name}
          </Link>
        </Item>
      ))}
    </ListContainer>
  );
};

export default Navbar;
