import * as React from "react";
import styled from "styled-components";
import Shotgun from "./Shotgum";
import Reservations from "./Reservations";

const pageStyles = {
  color: "#232129",
  padding: 0,
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const StyledNav = styled.nav`
  position: absolute;
  z-index: 9999;
  padding: 10px;
  background: rgba(000, 000, 000, 0.3);
  width: 100%;
  border-bottom: 1px solid white;
  box-sizing: border-box;
`;

const StyledButton = styled.button<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : " #ccc")};
  font-size: 14px;
  margin: 5px 15px;
  text-transform: uppercase;
`;

const Wrapper = styled.div<{ show: boolean }>`
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 1.5s ease;
`;

const IndexPage = ({ props }) => {
  const [showShotGum, setShowSHotGum] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    setShowContent(true);

    const query =
      window?.location.search && new URLSearchParams(window?.location.search);

    if (query) {
      const versionQuery = query?.get("version");
      versionQuery === "shotgum" && setShowSHotGum(true);
    }
  }, []);

  return (
    <main style={pageStyles}>
      <StyledNav>
        <StyledButton
          active={!showShotGum}
          onClick={() => setShowSHotGum(!showShotGum)}
        >
          No Reservations
        </StyledButton>
        <StyledButton
          active={showShotGum}
          onClick={() => setShowSHotGum(!showShotGum)}
        >
          Shotgum
        </StyledButton>
      </StyledNav>

      <Wrapper show={showContent}>
        {showShotGum ? <Shotgun /> : <Reservations />}
      </Wrapper>
    </main>
  );
};

export default IndexPage;
