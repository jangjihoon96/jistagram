import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';
import { useCreateAuthUser } from '@/@service/firestore';
import { useAuthState, useSignUp } from '@/@service/auth';

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
    <div>
      <h2>Signup</h2>
      <form>
        <label htmlFor="userName">이름</label>
        <input type="text" id="userName" name={'name'} onChange={handleChangeInput} required />
        <br />
        <label htmlFor="userNickname">닉네임</label>
        <input
          type="text"
          id="userNickname"
          name={'nickname'}
          onChange={handleChangeInput}
          required
        />
        <br />
        <label htmlFor="userEmail">Email</label>
        <input type="email" id="userEmail" name={'email'} onChange={handleChangeInput} required />
        <br />
        <label htmlFor="userPassword">Password</label>
        <input
          type="password"
          id="userPassword"
          name={'password'}
          onChange={handleChangeInput}
          required
        />
        <br />
        <button onClick={handleSubmit}>회원가입 완료</button>
      </form>
    </div>
  );
};
