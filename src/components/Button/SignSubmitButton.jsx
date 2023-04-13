import styled from 'styled-components/macro';

export const SignSubmitButton = ({ type = 'button', onClick = null, children }) => {
  return (
    <StyledSignSubmitButton type={type} onClick={onClick}>
      {children}
    </StyledSignSubmitButton>
  );
};

const StyledSignSubmitButton = styled.button`
  display: block;
  width: 100%;
  height: 3.5rem;
  background-color: #4b4bff;
  border: 0;
  border-radius: 0.625rem;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #6363fe;
  }
`;
