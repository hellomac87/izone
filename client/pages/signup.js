import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'libs/styled-common';

const Signup = props => {
  return (
    <Wrapper>
      <h1>Signup</h1>
      <Form>
        <Input name="email" type="email" placeholder="email" />
        <br />
        <Input name="password" type="password" placeholder="password" />
        <br />
        <Input
          name="password-confirm"
          type="password"
          placeholder="password-confirm"
        />
        <br />
        <button type="submit">SignUp</button>
      </Form>
    </Wrapper>
  );
};

Signup.propTypes = {};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 370px;
`;

export default Signup;
