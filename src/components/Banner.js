import React from "react";
import styled from "styled-components";

const BannerContainer = styled.section`
  width: 70%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  color: #f4f4f4;

  h4 {
    margin: 1rem 0;
  }

  @media (min-width: 720px) {
    width: 50%;
  }
`;

function Banner({ header, subheader, text }) {
  return (
    <BannerContainer>
      <h2 className="text-center">
        <span className="header-line">{header}</span>
      </h2>
      <h4 className="text-center">{subheader}</h4>
      <p className="text-center">{text}</p>
    </BannerContainer>
  );
}

export default Banner;
