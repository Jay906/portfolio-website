import React from "react";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styled from "styled-components";

const Footer = styled.footer`
  margin: 1rem 0;

  a {
    display: inline-block;
    margin: 1rem;
    font-size: 2rem;
    text-decoration: none;
  }

  .phone {
    color: rgb(0, 138, 0);
  }

  .facebook {
    color: rgb(59, 89, 152);
  }

  .twitter {
    color: rgb(29, 161, 242);
  }

  .github {
    color: #000;
  }

  .mail {
    color: #aa0000;
  }

  @media (min-width: 720px) {
    a {
      font-size: 3rem;
    }
  }
`;

function Contacts() {
  return (
    <Footer>
      <h3 className="text-center" id="contacts">
        <span className="header-line">Contact Me</span>
      </h3>
      <section className="contacts text-center">
        <a href="tel:+7(952)-211-64-77" className="phone">
          <FaPhone />
        </a>
        <a
          href="https://www.facebook.com/jelaleddin.atalykov"
          className="facebook"
        >
          <AiFillFacebook />
        </a>
        <a href="mailto:atalykovj@gmail.com" className="mail">
          <SiGmail />
        </a>
        <a href="https://twitter.com/Jay03065595" className="twitter">
          <AiFillTwitterCircle />
        </a>
        <a href="https://github.com/Jay906" className="github">
          <AiFillGithub />
        </a>
      </section>
    </Footer>
  );
}

export default Contacts;
