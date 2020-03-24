import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = props => {
  return <StyledHeader>Header</StyledHeader>;
};

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #24292e;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Header.propTypes = {};

export default Header;
