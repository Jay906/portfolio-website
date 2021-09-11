import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${({ isBlack }) =>
    isBlack ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"};
  color: ${({ isBlack }) => (isBlack ? "#f4f4f4" : "#333")};
  border-bottom: 1px solid #999;
  transition: background 0.3s;

  .nav-center {
    display: block;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    max-height: 80px;
    position: relative;
  }

  .nav {
    display: block;
    width: 100%;
    height: 0px;
    overflow: hidden;
    transition: all 0.4s;
  }

  .nav-show {
    height: 265px;
  }

  .nav-item {
    list-style-type: none;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid black;
  }

  .nav-item a {
    color: inherit;
    text-decoration: none;
    height: 100%;
  }

  .menu-button {
    color: ${({ isBlack }) => (isBlack ? "#f4f4f4" : "#333")};
    font-size: 1.3rem;
    position: relative;
  }

  .menu-button svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;

    .menu-button {
      display: none;
    }

    .nav-center {
      display: flex;
      width: 90%;
      margin: auto;
      height: 100%;
    }

    .nav-header {
      width: 35%;
    }

    .nav {
      display: flex;
      justify-content: flex-end;
      height: 52px;
      width: 60%;
    }

    .nav-item {
      margin: 0 1rem;
      height: 52px;
      border: none;
      padding: 0;
    }

    .nav-item a {
      display: flex;
      align-items: center;
      height: 52px;
      text-decoration: none;
      color: inherit;
    }
  }
`;

function Header({ y }) {
  const [show, setShow] = useState(false);
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    const onScroll = (params) => {
      const currentY = window.pageYOffset;
      const black = currentY >= y ? false : true;
      setIsBlack(black);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [y]);

  return (
    <HeaderContainer isBlack={isBlack}>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Jelaleddin Atalykov</h3>
          <button className="button menu-button" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className={`${show ? "nav nav-show" : "nav"}`}>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}

export default Header;
