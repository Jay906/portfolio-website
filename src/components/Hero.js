import React from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ image }) => `url(${image}) no-repeat center center/cover`};
  width: 100%;
  height: 40vh;

  @media (min-width: 720px) {
    height: 50vh;
  }
`;

function Hero({ image, children }) {
  return <HeroContainer image={image}>{children}</HeroContainer>;
}

export default Hero;
