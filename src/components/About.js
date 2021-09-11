import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/jelal.jpg";

const AboutContainer = styled.section`
  margin-top: 0.5rem;

  .main-container {
    padding: 1rem;
    align-items: center;
  }

  img {
    display: block;
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    max-height: 400px;
  }

  p {
    text-indent: 1rem;
    margin: 0.5rem 0;
  }

  @media (min-width: 720px) {
    .container {
      width: 90%;
      margin: 0 auto;
    }

    .main-container {
      display: flex;
    }

    img {
      width: 80%;
    }

    .paragraphs {
      width: 50%;
    }
  }
`;

function About() {
  return (
    <AboutContainer className="container">
      <div className="container" id="about">
        <h2 className="text-center">
          <span className="header-line">About Myself</span>
        </h2>
        <section className="main-container">
          <div className="image">
            <img src={img} alt="me" />
          </div>
          <article className="paragraphs">
            <p>
              First and foremost, I want to say that I am a lifetime learner. I
              love learning and experiencing new things whether it is in my
              professional career or in life. Because I truly believe that, this
              is how you discover yourself and develop your personality!
            </p>
            <p>
              If you are interested in my story then you can read about my
              journey on coding <Link to="/blog/0">here </Link>I promise you,
              you will not be disappointed!
            </p>
          </article>
        </section>
      </div>
    </AboutContainer>
  );
}

export default About;
