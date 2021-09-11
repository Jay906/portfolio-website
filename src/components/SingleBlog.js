import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import blogDB from "../pages/blog/blogDB";
import Hero from "./Hero";

const SingleBlogContainer = styled.section`
  margin: 1rem auto;
  width: 90%;

  p {
    margin: 1rem 0;
  }
`;

function SingleBlog() {
  const { id } = useParams();
  const blog = blogDB.find((n) => n.id === Number(id));
  return (
    <div>
      <Hero image={blog.image} />
      <SingleBlogContainer>
        <h2>{blog.header}</h2>
        <p>{blog.text}</p>
      </SingleBlogContainer>
    </div>
  );
}

export default SingleBlog;
