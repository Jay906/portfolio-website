import React from "react";
import styled from "styled-components";
import hero from "../assets/header-background.jpg";
import TypeWriter from "./TypeWriter";

const ShowcaseContainer = styled.section`
  text-align-center;
  height: calc(100vh - 80px);
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${hero}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f4f4f4;
  
  .hide {
    visibility: hidden;
  }

  p {
    text-align: center;
    padding: 0 1rem;
    margin-top: 1rem; 
  }

  .button {
    display: block;
    text-align: center;
    color: #333;
    border; 1px solid $f4f4f4;
    background: #f4f4f4;
    padding: 14px 16px;
    margin-top: 1rem;
  }

  @media (min-width: 720px) {
    .container {
      width: 90%;
      margin: 1rem auto;
    }
  }
`;

function Showcase() {
  return (
    <div id="home">
      <ShowcaseContainer>
        <TypeWriter words="Front-End Developer." />
        <p className="container">
          Specialized in developing web applications using React + Redux or
          vanilla JS. If you are a business or an individual seeking a web
          presenence or employer seeking to hire, you can get in touch with me
          here.
        </p>
        <section className="buttons">
          <a
            href="mailto:atalykovj@gmail.com?subject=Hiring"
            className="button"
          >
            Email me
          </a>
        </section>
      </ShowcaseContainer>
    </div>
  );
}

export default Showcase;
