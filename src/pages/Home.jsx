import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Container } from '@/components/Container/Container';
import { PostCard } from '@/components/PostCard/PostCard';

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <StyledMain>
          <PostCard />
          <PostCard />
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
