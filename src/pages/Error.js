import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2,
  a {
    margin: 1rem 0;
  }

  a {
    display: inline-block;
    padding: 14px 16px;
    background: #ff4747;
    color: #f4f4f4;
    text-decoration: none;
  }
`;

function Error() {
  return (
    <ErrorContainer>
      <h1>
        <span className="header-line">404</span>
      </h1>
      <h3>Page Not Found</h3>
      <Link to="/">Back To Home Page</Link>
    </ErrorContainer>
  );
}

export default Error;
