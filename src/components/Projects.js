import React from "react";
import Project from "./Project";
import styled from "styled-components";

const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
`;

const Projects = React.forwardRef(({ projects }, ref) => {
  return (
    <section ref={ref} id="projects">
      <h1 className="text-center">
        <span className="header-line">Projects</span>
      </h1>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Project
            title={project.title}
            link={project.link}
            image={project.image}
            key={index}
          />
        ))}
      </ProjectContainer>
    </section>
  );
});

export default Projects;
