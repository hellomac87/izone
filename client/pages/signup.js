import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useImmer } from 'use-immer';
import validator from 'validator';
import { passwordRegx } from '../libs/regx';

import styled from 'styled-components';
import { Input } from 'libs/styled-common';

const Signup = (props) => {
  const [form, setForm] = useImmer({
    email: '',
    password: '',
    password_confirm: '',
  });

  const [validate, setVaildate] = useImmer({
    email: {
      value: null,
      message: '',
    },
    password: {
      value: null,
      message: '',
    },
    password_confirm: {
      value: null,
      message: '',
    },
  });

  const onChangeForm = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;

      setForm((draft) => {
        draft[name] = value;
      });
    },
    [setForm],
  );

  const onValidateEmail = useCallback(() => {
    const { email } = form;
    const isEmail = validator.isEmail(email);

    if (!email) {
      setVaildate((draft) => {
        draft.email.value = false;
        draft.email.message = '이메일을 입력해주세요.';
      });
      return false;
    }

    if (!isEmail) {
      setVaildate((draft) => {
        draft.email.value = false;
        draft.email.message = '이메일을 형식이 잘못되었습니다.';
      });
      return false;
    }
    setVaildate((draft) => {
      draft.email.value = true;
      draft.email.message = '';
    });
    return true;
  }, [form, setVaildate]);

  const onValidatePassword = useCallback(() => {
    const { password } = form;

    if (!password) {
      setVaildate((draft) => {
        draft.password.value = false;
        draft.password.message = '비밀번호를 입력해주세요.';
      });
      return false;
    }
    if (!passwordRegx.test(password)) {
      setVaildate((draft) => {
        draft.password.value = false;
        draft.password.message =
          '특수문자,문자,숫자 포함 형태의 6~15자리로 입력해주세요.';
      });
      return false;
    }

    setVaildate((draft) => {
      draft.password.value = true;
      draft.password.message = '';
    });
    return true;
  }, [form, setVaildate]);

  const onValidatePasswordConfirm = useCallback(() => {
    const { password, password_confirm } = form;
    if (!password_confirm) {
      setVaildate((draft) => {
        draft.password_confirm.value = false;
        draft.password_confirm.message = '비밀번호 확인을 입력해주세요.';
      });
      return false;
    }
    if (password !== password_confirm) {
      setVaildate((draft) => {
        draft.password_confirm.value = false;
        draft.password_confirm.message = '비밀번호가 일치하지 않습니다.';
      });
      return false;
    }
    setVaildate((draft) => {
      draft.password_confirm.value = true;
      draft.password_confirm.message = '';
    });
    return true;
  }, [form, setVaildate]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!onValidateEmail()) return;
    },
    [form],
  );
  console.log(form);
  return (
    <Wrapper>
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
        <InputElem>
          <Input
            name="email"
            type="email"
            placeholder="email"
            value={form.email || ''}
            onChange={onChangeForm}
            onBlur={onValidateEmail}
          />
          {validate.email.value === false && (
            <ValidateMessage>{validate.email.message}</ValidateMessage>
          )}
        </InputElem>

        <InputElem>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={form.password || ''}
            onChange={onChangeForm}
            onBlur={onValidatePassword}
          />
          {validate.password.value === false && (
            <ValidateMessage>{validate.password.message}</ValidateMessage>
          )}
        </InputElem>

        <InputElem>
          <Input
            type="password"
            name="password_confirm"
            placeholder="password_confirm"
            value={form.password_confirm || ''}
            onChange={onChangeForm}
            onBlur={onValidatePasswordConfirm}
          />
          {validate.password_confirm.value === false && (
            <ValidateMessage>
              {validate.password_confirm.message}
            </ValidateMessage>
          )}
        </InputElem>

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

const InputElem = styled.div`
  position: relative;
  padding-bottom: 20px;
`;

const ValidateMessage = styled.div`
  position: absolute;
  bottom: 2px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  font-size: 12px;
  color: red;
`;

export default Signup;
