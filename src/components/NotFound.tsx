import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: calc(100vh - 80px);
`;

const Content = styled.h1`
  text-align: center;
  color: var(--darkGrey);
  line-height: 2;

  a {
    color: var(--medGrey);
  }
`;

const NotFound: React.FC = ({ children }) => {
  const base = (
    <Content>
      Ups...
      <br /> We couldn't find this.. <br />
      Maybe search from <Link to="/">Home</Link>?
    </Content>
  );

  return <Wrapper>{children ? <Content>{children}</Content> : base}</Wrapper>;
};

export default NotFound;
