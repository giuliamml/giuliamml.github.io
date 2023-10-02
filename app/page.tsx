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
        I am a frontend web developer and UI designer. My background in fashion
        design and analytical mind, allows me to bring digital products to life.
        Since August 2019, I have been designing and building clean and
        accessible user interfaces within the Javascript ecosystem. I enjoy
        working in collaborative environments and solving challenges as a team.
        <br />
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
