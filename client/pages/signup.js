import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'libs/styled-common';

const Signup = (props) => {
  const [form, setForm] = useState({
    email: '',
    passowrd: '',
    password_confirm: '',
  });

  const onChangeForm = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;

      setForm({
        ...form,
        [name]: value,
      });
    },
    [form, setForm],
  );
  console.log(form);
  return (
    <Wrapper>
      <h1>Signup</h1>
      <Form>
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={form.email || ''}
          onChange={onChangeForm}
        />
        <br />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={form.password || ''}
          onChange={onChangeForm}
        />
        <br />
        <Input
          name="password_confirm"
          type="password"
          placeholder="password_confirm"
          value={form.password_confirm || ''}
          onChange={onChangeForm}
        />
        <br />
        <Button type="submit">SignUp</Button>
      </Form>
    </Wrapper>
  );
};

Signup.propTypes = {};

const Wrapper = styled.section`
  width: 370px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 0 12px;
`;

export default Signup;
