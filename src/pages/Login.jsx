import styled from 'styled-components/macro';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import logo from '@/assets/icons/logo.svg';
import { SignInput } from '@/components/Input/SignInput';
import { SignSubmitButton } from '@/components/Button/SignSubmitButton';

export const Login = () => {
  const initialFormState = {
    email: '',
    password: '',
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formStateRef = useRef(initialFormState);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    console.log(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = formStateRef.current;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('로그인 성공');
        // Signed in
        const user = userCredential.user;
        // ...
        navigate('/');
      })
      .catch((error) => {
        console.log('로그인 실패');
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <StyledLoginContainer>
      <LoginLogoContainer>
        <img src={logo} alt="Jistagram" />
      </LoginLogoContainer>
      <h2 className="a11y-hidden">Login</h2>
      <Loginform>
        <SignInput
          type={'email'}
          htmlFor={'userEmail'}
          name={'email'}
          placeholder={'이메일을 입력하세요.'}
          onChange={handleChangeInput}
        />
        <SignInput
          type={'password'}
          htmlFor={'userPassword'}
          name={'password'}
          placeholder={'비밀번호를 입력하세요.'}
          onChange={handleChangeInput}
        />
        <SignSubmitButton type={'button'} onClick={handleSignIn}>
          로그인
        </SignSubmitButton>
      </Loginform>
      <StyledMoveSignUp>
        <Link to="/signup">회원가입 하기</Link>
      </StyledMoveSignUp>
    </StyledLoginContainer>
  );
};

const StyledLoginContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
`;

const LoginLogoContainer = styled.h1`
  text-align: center;
  margin-top: 6.25rem;
  img {
    width: 18.75rem;
  }
`;

const Loginform = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2.5rem;
  label {
    display: block;
    width: 100%;
  }
  input {
    width: 100%;
    height: 3.5rem;
    padding: 0 1.5rem;
    background-color: #191919;
    border: 0.0625rem solid #444444;
    border-radius: 0.625rem;
    font-size: 1rem;
    color: #ffffff;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #191919 inset;
    -webkit-text-fill-color: #ffffff;
  }
  label + label {
    margin-top: 1.25rem;
  }
  label + button {
    margin-top: 1.25rem;
  }
`;

const StyledMoveSignUp = styled.div`
  margin-top: 2.5rem;
  text-align: center;
  a {
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 2rem;
    color: #aaaaaa;
  }
  a:hover {
    color: #ffffff;
  }
`;
