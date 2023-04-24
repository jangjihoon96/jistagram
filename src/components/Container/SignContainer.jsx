import styled from 'styled-components/macro';

export const SignContainer = ({ children }) => {
  return <StyledSignContainer>{children}</StyledSignContainer>;
};

const StyledSignContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
`;
