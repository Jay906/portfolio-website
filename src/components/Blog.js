import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogContainer = styled.section`
  background: #fff;

  a {
    display: block;
    text-decoration: none;
    color: #000;
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
    box-shadow: 1px 1px 7px #000;
    border-radius: 5px;
  }
  p {
    margin: 1rem 0;
  }
`;

function Blog({ header, text, id }) {
  return (
    <BlogContainer>
      <Link to={`/blog/${id}`}>
        <h3>{header}</h3>
        <p>
          {text.substring(0, 150)}
          {text.length > 150 && " ..."}
        </p>
      </Link>
    </BlogContainer>
  );
}

export default Blog;
