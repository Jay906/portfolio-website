import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.section`
  width: 95%;
  margin: 1rem auto;
  min-height: 180px;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${({ image }) => `url(${image}) no-repeat center center/cover`};
  cursor: help;

  div {
    height: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    inset: 0;
    overflow: hidden;
    transition: all 0.4s;
    cursor: default;
  }

  &:hover div {
    height: 180px;
  }

  .project-button {
    padding: 14px 16px;
    margin: 0 0.1rem;
  }
`;

function Project({ link, title, image }) {
  return (
    <ProjectContainer image={image} title={title}>
      <div>
        <a href={link} className="button project-button">
          Visit the project
        </a>
      </div>
    </ProjectContainer>
  );
}

export default Project;
