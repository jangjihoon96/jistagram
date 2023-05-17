import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const First = () => {
  const navigate = useNavigate();
  const auth = getAuth();

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
};
