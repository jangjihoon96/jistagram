import styled from 'styled-components/macro';

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: calc(100% - 15rem);
  margin-left: auto;
  @media screen and (max-width: 1028px) {
    width: calc(100% - 12rem);
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 4rem);
  }
`;
