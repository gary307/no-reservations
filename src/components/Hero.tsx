import React from "react";
import { styled } from "styled-components";
import LogoSvg from "./../images/logo.svg";
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

  width: 17.5em;
  height: 5.18em;
  background: url(${LogoSvg}) no-repeat;
  background-size: contain;
`;

const HeaderWrapper = styled.header`
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

const Header = ({ backgroundImage }) => (
  <HeaderWrapper backgroundImage={backgroundImage}>
    <Reveal />
    <Logo>No Reservations</Logo>
    <ButtonBottom>More</ButtonBottom>
  </HeaderWrapper>
);

export default Header;
