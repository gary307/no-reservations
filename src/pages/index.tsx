import * as React from "react";
import { createGlobalStyle } from "styled-components";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

import Shotgun from "./Shotgun";
import Reservations from "./Reservations";

const pageStyles = {
  color: "#232129",
  padding: 0,
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

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
  font-size: 16px;
  margin-bottom: 24px;
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

const IndexPage = () => {
  const [showShotGun, setShowSHotGun] = React.useState(false);

  const resRef = React.useRef(null);
  const shotgunRef = React.useRef(null);
  const nodeRef = showShotGun ? shotgunRef : resRef;

  return (
    <main style={pageStyles}>
      <GlobalStyles />

      <button onClick={() => setShowSHotGun(!showShotGun)}>
        toggleShotgun
      </button>

      <SwitchTransition>
        <CSSTransition
          nodeRef={nodeRef}
          in={showShotGun}
          classNames="dialog"
          timeout={1300}
        >
          {/* <div ref={nodeRef}> */}
          {showShotGun ? <Shotgun /> : <Reservations />}
          {/* </div> */}
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};

export default IndexPage;
