import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const App = (props) => {
  return <HomeMain />;
};

const HomeMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: royalblue;
`;

App.propTypes = {};

export default App;
