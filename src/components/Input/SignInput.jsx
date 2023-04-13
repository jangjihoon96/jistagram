import styled from 'styled-components/macro';

export const SignInput = ({ type, htmlFor, name, placeholder, onChange = null }) => {
  return (
    <StyledSignInput htmlFor={htmlFor}>
      <span className="a11y-hidden">Email</span>
      <input type={type} id={htmlFor} name={name} placeholder={placeholder} onChange={onChange} />
    </StyledSignInput>
  );
};

const StyledSignInput = styled.label`
  display: block;
  width: 100%;
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
`;
