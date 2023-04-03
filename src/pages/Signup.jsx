import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';

export const Signup = () => {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const formStateRef = useRef(initialFormState);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formStateRef.current;

    // const user = await Signup(email,password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('회원가입 성공');
        // Signed in
        const user = userCredential.user;
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
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
