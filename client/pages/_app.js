import App from "next/app";
import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/Header";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>My new cool app</title>
        </Head>

        <Header />
        <CommonWrapper>
          <Component {...pageProps} />
        </CommonWrapper>

        <footer>footer</footer>
      </>
    );
  }
}

MyApp.propTypes = {};

const CommonWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;
