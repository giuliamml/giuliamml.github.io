/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState } from "react";
import { MainContentDescriptionContainer } from "./theme/Page.styles";

export default function Home() {
  return (
    <MainContentDescriptionContainer>
      <div>
        <h1>Giulia</h1>
        <h1>Mummolo</h1>
      </div>
      <p>
        I'm a creative professional with a background in fashion, now
        specializing in UI design and frontend development. My journey from
        fashion to tech has enabled me to merge aesthetics and technology by
        crafting digital experiences. <br />
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
