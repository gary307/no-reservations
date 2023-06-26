import React from "react";
import styled from "styled-components";

const SlideContainer = styled.div`
  && {
    #slide1 {
      background-image: url("../image/bg/1.jpg");
      height: 100vh;
    }

    #slide2 {
      background-image: url("./images/bg/2.jpg");
    }

    #slide3 {
      background-image: url("./images/bg/3.jpg");
    }

    #slide4 {
      background-image: url("./images/bg/4.jpg");
    }

    #slide5 {
      background-image: url("./images/bg/5.jpg");
    }

    #slide6 {
      background-image: url("./images/bg/6.jpg");
    }

    #slide7 {
      background-image: url("./images/bg/7.jpg");
    }
  }
`;

const SlideWrapper = styled.section`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;

  background-image: url(${(props) => props.backgroundImage});

  @media (min-width: 768px) {
    min-height: 100vh;
  }
  &:nth-child(n + 3) {
    @media (max-width: 767px) {
      padding-top: 50vw;
      background-position: top center;
      background-size: contain;
    }
  }
`;

const SlideContent = styled.div`
  padding: 30px;
  background: black;
  display: flex;
  flex-direction: column;
  color: white;
  box-sizing: border-box;

  margin-left: ${(props) => (props.direction === "left" ? "0px" : "auto")};

  @media (min-width: 768px) {
    width: 50%;
    padding: 48px 4% 24px;
    background: rgba(0, 0, 0, 0.67);
  }
`;

const Button = styled.a`
  background: #e50e07;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 10px;
  border: none;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  width: 65px;
  height: 32px;
  text-align: center;
  font-weight: 500;
  color: black;
`;

const ButtonTop = styled(Button)`
  && {
    border-radius: 0 0 48px 48px;
    top: 0;
    line-height: 30px;
    background: #cc0c06;
  }
`;

export const ButtonBottom = styled(Button)`
  && {
    line-height: 42px;
    border-radius: 48px 48px 0 0;
    bottom: 0;
  }
`;

const Slide = ({
  children,
  slideId,
  backgroundImage,
  direction = "left",
  hideFooterAction,
}) => (
  <SlideContainer>
    <SlideWrapper
      className="slide"
      id={slideId}
      backgroundImage={backgroundImage}
      direction={direction}
    >
      <ButtonTop>Back</ButtonTop>
      <SlideContent direction={direction}>{children}</SlideContent>
      {hideFooterAction ? null : (
        <ButtonBottom href="#slide4">More</ButtonBottom>
      )}
    </SlideWrapper>
  </SlideContainer>
);

export default Slide;
