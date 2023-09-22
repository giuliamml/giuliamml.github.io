import React from "react";
import Navbar from "../navbar/Navbar";
import { Wrapper } from "./Footer.styles";

const Items = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/giulia-mummolo-1042b798/",
  },
  {
    name: "github",
    href: "https://github.com/giuliamml",
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Navbar items={Items} isTargetBlank />
      <hr />
    </Wrapper>
  );
};

export default Footer;
