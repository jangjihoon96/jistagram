import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="userEmail">Email</label>
        <input type="email" id="userEmail" name={'email'} onChange={handleChangeInput} />
        <br />
        <label htmlFor="userPassword">Password</label>
        <input type="password" id="userPassword" name={'password'} onChange={handleChangeInput} />
        <br />
        <button onClick={handleSignIn}>로그인</button>
      </form>
      <Link to="/signup">회원가입 하기</Link>
    </div>
  );
};
