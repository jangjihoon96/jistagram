import styled from 'styled-components/macro';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import logo from '@/assets/icons/logo.svg';
import { SignInput } from '@/components/Input/SignInput';
import { SignSubmitButton } from '@/components/Button/SignSubmitButton';
import { FormContainer } from '@/components/Container/FormContainer';
import { HeadingOne } from '@/components/Heading/HeadingOne';

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
        alert('로그인 정보를 확인해주세요.');
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    const loginCheckAndMove = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          navigate('/home');
        } else {
          navigate('/login');
        }
      });
    };
    loginCheckAndMove();
  }, []);

  return (
    <StyledLoginContainer>
      <HeadingOne>
        <img src={logo} alt="Jistagram" />
      </HeadingOne>
      <h2 className="a11y-hidden">Login</h2>
      <FormContainer>
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
      </FormContainer>
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
