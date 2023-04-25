import styled from 'styled-components/macro';

export const HeadingOne = ({ children }) => {
  return <StyledHeadingOne>{children}</StyledHeadingOne>;
};

const StyledHeadingOne = styled.h1`
  text-align: center;
  margin-top: 6.25rem;
  font-size: 2.5rem;
  img {
    width: 18.75rem;
  }
`;
