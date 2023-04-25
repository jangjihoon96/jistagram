import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';
import { useCreateAuthUser } from '@/@service/firestore';
import { useAuthState, useSignUp } from '@/@service/auth';
import { SignInput } from '@/components/Input/SignInput';
import { SignSubmitButton } from '@/components/Button/SignSubmitButton';
import { SignContainer } from '@/components/Container/SignContainer';
import { FormContainer } from '@/components/Container/FormContainer';
import { HeadingOne } from '@/components/Heading/HeadingOne';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  nickname: '',
};
export const Signup = () => {
  const { signUp } = useSignUp();
  const formStateRef = useRef(initialFormState);
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error } = useAuthState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  // const { createAuthUser } = useCreateAuthUser();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, nickname } = formStateRef.current;

    const user = await signUp(email, password, name);
    await createAuthUser(user, {
      name,
      nickname,
    });
    navigate('/');
  };

  return (
    <SignContainer>
      <HeadingOne>회원가입</HeadingOne>
      <FormContainer>
        <SignInput
          type={'text'}
          htmlFor={'userName'}
          name={'name'}
          placeholder={'이름을 입력하세요.'}
          onChange={handleChangeInput}
        />
        <SignInput
          type={'text'}
          htmlFor={'userNickname'}
          name={'nickname'}
          placeholder={'닉네임을 입력하세요.'}
          onChange={handleChangeInput}
        />
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
        <SignSubmitButton type={'button'} onClick={handleSubmit}>
          회원가입 완료
        </SignSubmitButton>
      </FormContainer>
      <StyledMoveLogin>
        <Link to="/login">로그인 하기</Link>
      </StyledMoveLogin>
    </SignContainer>
  );
};

const StyledMoveLogin = styled.div`
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
