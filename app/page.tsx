/** @jsxImportSource @emotion/react */
"use client";
import { MainContentDescriptionContainer } from "./theme/Page.styles";

export default function Home() {
  return (
    <MainContentDescriptionContainer>
      <div>
        <h1>Giulia</h1>
        <h1>Mummolo</h1>
      </div>
      <p>
        I am a frontend web developer and UI designer with a background in
        fashion design and professional experience in retail and e-commerce. My
        background in design and analytical mind allows me to work at the
        intersection between UI design and code. I have experience in building
        interactive and accessible user interfaces within the Javascript
        ecosystem. <br />
        Currently, I work as Frontend Engineer @
        <a
          className="company-link"
          href="https://www.farfetchplatformsolutions.com/"
          target="_blank"
        >
          FARFETCH.
        </a>
      </p>
    </MainContentDescriptionContainer>
  );
}
