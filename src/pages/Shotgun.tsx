import * as React from "react";
import Header from "../components/Hero";
import Slide from "../components/Slide";

import ImageBg1 from "../images/bg-shotgum/1.jpg";
import ImageBg2 from "../images/bg-shotgum/2.jpg";
import ImageBg3 from "../images/bg-shotgum/3.jpg";
import ImageBg4 from "../images/bg-shotgum/4.jpg";
import ImageBg5 from "../images/bg-shotgum/5.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  font-family: Lato,PT Sans,sans-serif;
  color: #eee;
  background: #000;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.5em;
}

body {
  margin: 0;
  font-family: Lato,PT Sans,sans-serif;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

h2 {
  font-size: 32px;
  line-height: 2;
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
}

h3 {
  font-size: 24px;
  line-height: 48px;
  font-family: "Fjalla One", sans-serif;
}

h4 {
  font-family: "Arvo", serif;
  line-height: 48px;
}

p {
  font-size: 18px;
  margin-top: 30px;
  line-height: 32px;
  margin-bottom: 24px;
  font-family: Lato,PT Sans,sans-serif;
}

li {
  font-size: 18px;
  font-family: Lato,PT Sans,sans-serif;
}

a {
  line-height: 24px;
  color: #e50e07;
  text-decoration: none;
}

h2,
h3 {
  mask-image: url("../images/mask.png");
}

.leading {
  font-size: 18px;
  font-family: "Arvo", serif;
}

.status {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 900;
}

.linkRed {
  color: #e50e07;
}

.footer {
  margin-top: auto;

}

.footer p {
  font-size: 14px;
}

.dialog-enter {
  opacity: 0;
}

.dialog-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.dialog-exit {
  opacity: 1;
}
.dialog-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

`;

const Shotgun = () => {
  return (
    <>
      <GlobalStyles />
      <Header backgroundImage={ImageBg1} theme="dark" slideId={1} />
      <Slide
        slideId={2}
        backgroundImage={ImageBg2}
        direction="left"
        theme="dark"
      >
        <h2>One stop pick-up shop.</h2>

        <p>
          At Shot-Gum Productions, we specialize in TV and film pick-ups and
          re-shoots using Virtual Production technology in central London.
        </p>
      </Slide>

      <Slide
        slideId={3}
        backgroundImage={ImageBg3}
        direction="right"
        theme="dark"
      >
        <h2>Why shot-gum?</h2>
        <p>
          Re-shoots and pick-ups can be disruptive and costly exercises for any
          production, but they are often essential to completing the
          storytelling process. We are here to support your projects and handle
          all the heavy lifting involved in organizing re-shoots and pick-ups.
          We are mindful of costs and committed to maintaining the quality and
          style of the film. We have our own virtual stages and motion capture
          facilities in central London (Zone 1) and Newcastle upon Tyne.
        </p>
      </Slide>

      <Slide
        slideId={4}
        backgroundImage={ImageBg4}
        direction="left"
        theme="dark"
      >
        <h2>It’s what we do</h2>
        <ul>
          <li>
            Find creative solutions that prioritize quality, time, and costs.
          </li>
          <li>
            Provide technical and experienced crew, including a range of
            director choices.
          </li>
          <li>
            Take care of cast and casting with the help of our extensive network
            of casting directors.
          </li>
          <li>
            Organize location-based shoots both domestically and
            internationally.
          </li>
        </ul>
      </Slide>

      <Slide
        hideFooterAction={true}
        slideId={5}
        backgroundImage={ImageBg5}
        direction="right"
        theme="dark"
      >
        <h2>Why virtual production? </h2>
        <p>
          Virtual production technology enables us to create immersive
          environments for talents and crews, enhancing the audience's
          film-watching experience. It offers a controlled environment and
          creative freedom, while also addressing logistical challenges by
          eliminating the need to fly large crews abroad.
        </p>
      </Slide>
    </>
  );
};

export default Shotgun;
