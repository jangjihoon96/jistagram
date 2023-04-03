import styled from 'styled-components/macro';

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: calc(100% - 15rem);
  margin-left: auto;
`;
