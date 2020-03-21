import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = props => {
  return <HeadWrapper>Header</HeadWrapper>;
};

const HeadWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: #24292e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Header.propTypes = {};

export default Header;
