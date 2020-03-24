import App from "next/app";
import Head from "next/head";
import { withRouter } from "next/router";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    // 공통 레이아웃을 적용시키지 않을 url
    const hasNotCommonLayoutUrls = ["/signup"];

    if (hasNotCommonLayoutUrls.includes(router.pathname)) {
      return <Component {...pageProps} />;
    }
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

        <Component {...pageProps} />

        <footer>footer</footer>
      </>
    );
  }
}

MyApp.propTypes = {};

export default withRouter(MyApp);
