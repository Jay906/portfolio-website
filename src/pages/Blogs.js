import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import blogImage from "../assets/blog.jpg";
import Banner from "../components/Banner";
import blogDB from "./blog/blogDB";
import Blog from "../components/Blog";

const BlogsContainer = styled.section`
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

function Blogs() {
  return (
    <>
      <Hero image={blogImage}>
        <Banner
          header="Welcome"
          subheader="Briefly about my life..."
          text="Hopefully, you will enjoy reading about my journey!"
        />
      </Hero>
      <BlogsContainer>
        {blogDB.map((blog) => (
          <Blog
            id={blog.id}
            header={blog.header}
            text={blog.text}
            image={blog.image}
            key={blog.id}
          />
        ))}
      </BlogsContainer>
    </>
  );
}

export default Blogs;
