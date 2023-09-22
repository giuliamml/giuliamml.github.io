import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const ProjectWrapper = styled.div`
  padding-block: 3rem;

  a {
    text-decoration: none;
    cursor: pointer;
    z-index: 111;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 500px);
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  max-width: 500px;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  padding: 50px 50px;

  h3 {
    text-transform: uppercase;
    font-size: 0.8vw;
    letter-spacing: 0.16rem;
    line-height: 1.29;
    text-align: left;
  }

  h1 {
    font-family: $text-heading;
    font-size: 2vw;
    padding: 2% 0;
    opacity: 1;
    display: inline-block;
    text-transform: uppercase;
  }
`;
