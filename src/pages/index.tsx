import * as React from "react";
import styled from "styled-components";
import Shotgun from "./Shotgun";
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

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : " #ccc")};
  font-size: 14px;
  margin: 5px 15px;
  text-transform: uppercase;
`;

const IndexPage = ({ props }) => {
  const [showShotGun, setShowSHotGun] = React.useState(false);

  React.useEffect(() => {
    const query =
      window?.location.search && new URLSearchParams(window?.location.search);

    if (query) {
      const versionQuery = query?.get("version");
      versionQuery === "shotgum" && setShowSHotGun(true);
    }
  }, []);

  return (
    <main style={pageStyles}>
      <StyledNav>
        <StyledButton
          active={!showShotGun}
          onClick={() => setShowSHotGun(!showShotGun)}
        >
          No Reservations
        </StyledButton>
        <StyledButton
          active={showShotGun}
          onClick={() => setShowSHotGun(!showShotGun)}
        >
          Shotgum
        </StyledButton>
      </StyledNav>

      {showShotGun ? <Shotgun /> : <Reservations />}
    </main>
  );
};

export default IndexPage;
