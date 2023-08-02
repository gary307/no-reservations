import React from "react";
import { styled } from "styled-components";
import LogoSvg from "./../images/logo.svg";
import LogoShotGun from "./../images/logo_shotgum.png";
import { ButtonBottom } from "./Slide";

const Reveal = styled.div`
  background: black;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  display: none;
`;

const Logo = styled.h1`
  text-indent: 150%;
  white-space: nowrap;
  overflow: hidden;
  max-width: 90%;
  width: 17.5em;
  height: 5.18em;
  background: url(${LogoSvg}) no-repeat;
  background-size: contain;

  @media (max-width: 500px) {
    max-width: 180px;
  }
`;

const HeaderWrapper = styled.header<{ backgroundImage: string }>`
  background-attachment: fixed;
  background-image: url(${(props) => props.backgroundImage});
  height: 100vh;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  @media (max-width: 500px) {
    max-width: 180px;
  }

  width: 300px;
  display: block;
`;

const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Header = ({
  backgroundImage,
  themeColor,
  slideId,
}): React.ReactElement<{
  theme?: string;
  slideId: number;
  backgroundImage: string;
}> => {
  const moveSlide = (slideId) => {
    const element = document.getElementById(`slide${slideId}`);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <HeaderWrapper backgroundImage={backgroundImage} id={`slide${slideId}`}>
      <Reveal />
      <LogosWrapper>
        {themeColor === "dark" ? (
          <StyledImg src={LogoShotGun} />
        ) : (
          <Logo>No Reservations</Logo>
        )}
      </LogosWrapper>

      <ButtonBottom
        onClick={() => moveSlide(slideId + 1)}
        themeColor={themeColor}
      >
        More
      </ButtonBottom>
    </HeaderWrapper>
  );
};

export default Header;
