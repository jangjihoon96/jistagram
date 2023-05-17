import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Container } from '@/components/Container/Container';
import { PostCard } from '@/components/PostCard/PostCard';
import React, { useState, useEffect } from 'react';
import app from '@/@service/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();
const postCardRef = collection(db, 'postCard');

export const Home = () => {
  const [postList, setPostList] = useState([]);

  // Read data from Firestore
  useEffect(() => {
    const getPostCard = async () => {
      try {
        const postCardSnapshot = await getDocs(postCardRef);
        const postData = postCardSnapshot.docs.map((doc) => doc.data());
        setPostList(postData);
      } catch (error) {
        console.log('postCard 정보를 가져오지 못했습니다.');
      }
    };
    getPostCard();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <StyledMain>
          {postList.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <PostCard
                  userId={item.userId}
                  alt={item.alt}
                  desc={item.desc}
                  id={item.id}
                  like={item.like}
                  src={item.src}
                />
              </React.Fragment>
            );
          })}
        </StyledMain>
      </Container>
    </>
  );
};

const StyledMain = styled.main`
  max-width: 39.375rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`;
