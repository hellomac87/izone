import React from "react";
import PropTypes from "prop-types";

const Common = ({ Component, pageProps }) => {
  return (
    <>
      <header>header</header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  );
};

Common.propTypes = {};

export default Common;
