import styled from 'styled-components/macro';

export const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

const StyledFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2.5rem;
  label {
    display: block;
    width: 100%;
  }
  input {
    width: 100%;
    height: 3.5rem;
    padding: 0 1.5rem;
    background-color: #191919;
    border: 0.0625rem solid #444444;
    border-radius: 0.625rem;
    font-size: 1rem;
    color: #ffffff;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #191919 inset;
    -webkit-text-fill-color: #ffffff;
  }
  label + label {
    margin-top: 1.25rem;
  }
  label + button {
    margin-top: 1.25rem;
  }
`;
