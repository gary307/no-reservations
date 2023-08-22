import React from "react";
import { styled } from "styled-components";
import LogoNR from "./../images/logo_nr_600.png";
import LogoShotGun from "./../images/logo_shotgum_600.png";
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

const HeaderWrapper = styled.header<{ backgroundImage: string }>`
  background-attachment: fixed;
  background-image: url(${(props) => props.backgroundImage});
  height: 100vh;
  background-size: auto 100vh;

  background-position: top center;
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
          <StyledImg src={LogoNR} />
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
