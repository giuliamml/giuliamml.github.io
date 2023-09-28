import React from "react";
import Navbar from "../navbar/Navbar";
import { Wrapper } from "./Footer.styles";

const Items = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/giulia-mummolo-1042b798/",
    isTargetBlank: true,
  },
  {
    name: "github",
    href: "https://github.com/giuliamml",
    isTargetBlank: true,
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Navbar items={Items} />
      <hr />
    </Wrapper>
  );
};

export default Footer;
