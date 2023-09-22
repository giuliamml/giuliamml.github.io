import TextBox from "../components/textBox/TextBox";

const content = {
  title: "I am",
  subtitle: "Giulia",
  text: (
    <>
      a creative professional who embarked on a journey from fashion design to
      UI design and frontend development. <br />
      My passion for crafting visual experiences has evolved as I transitioned
      from designing physical garments to shaping digital products for the web.{" "}
      <br />
      Currently, I work as Front-End Engineer @ FARFETCH. <br />
      My career transition has not only allowed me to leverage my creativity but
      has also given me the opportunity to bridge the gap between aesthetics and
      technology. <br />
      This fusion of my artistic background and technical expertise enables me
      to create user-centric designs that come to life in the digital realm.
    </>
  ),
  link: {
    title: "view my CV",
    href: "/files/Giulia-Mummolo-CV.pdf",
  },
};

export default function About() {
  return (
    <>
      <TextBox content={content} />
    </>
  );
}
