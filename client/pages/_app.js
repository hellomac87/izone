import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/header/Header";

const Common = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <CommonWrapper>
        <Component {...pageProps} />
      </CommonWrapper>

      <footer>footer</footer>
    </>
  );
};

const CommonWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;

Common.propTypes = {};

export default Common;
