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
  flex-direction: column;

  background-image: url(${(props) => props.backgroundImage});

  @media (min-width: 868px) {
    min-height: 100vh;
  }
  &:nth-child(n + 3) {
    @media (max-width: 867px) {
      padding-top: 50vw;
      background-position: top center;
      background-size: contain;
      flex-direction: row;
    }
  }
`;

const SlideContent = styled.div`
  padding: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: black;
  display: flex;
  flex-direction: column;
  color: white;
  box-sizing: border-box;
  width: 100%;

  margin-left: ${(props) => (props.direction === "left" ? "0px" : "auto")};

  @media (min-width: 868px) {
    width: 50%;
    height: 100vh;
    justify-content: center;
    padding: 48px 4% 24px;
    background: rgba(0, 0, 0, 0.67);
  }
`;

const Button = styled.a`
  background: ${(props) => (props.theme === "dark" ? "yellow" : "#e50e07")};
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
  cursor: pointer;
`;

const ButtonTop = styled(Button)`
  && {
    border-radius: 0 0 48px 48px;
    top: 0;
    line-height: 30px;
    background: ${(props) => (props.theme === "dark" ? "yellow" : "#cc0c06")};
  }
`;

export const ButtonBottom = styled(Button)`
  && {
    background: ${(props) => (props.theme === "dark" ? "yellow" : "#e50e07")};
    line-height: 42px;
    border-radius: 48px 48px 0 0;
    bottom: 0;
    cursor: pointer;
  }
`;

const SlideImage = styled.img`
  max-width: 100%;
  display: block;

  @media (min-width: 868px) {
    display: none;
  }
`;

const Slide = ({
  children,
  slideId,
  backgroundImage,
  direction = "left",
  hideFooterAction = false,
  theme = "light",
}) => {
  const moveSlide = (slideId) => {
    const element = document.getElementById(`slide${slideId}`);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <SlideContainer id={`slide${slideId}`}>
      <SlideWrapper
        className="slide"
        id={slideId}
        backgroundImage={backgroundImage}
        direction={direction}
      >
        <ButtonTop theme={theme} onClick={() => moveSlide(slideId - 1)}>
          Back
        </ButtonTop>
        <SlideContent direction={direction}>{children}</SlideContent>

        <SlideImage src={backgroundImage} />
        {hideFooterAction ? null : (
          <ButtonBottom theme={theme} onClick={() => moveSlide(slideId + 1)}>
            More
          </ButtonBottom>
        )}
      </SlideWrapper>
    </SlideContainer>
  );
};

export default Slide;
