import styled from "styled-components";

const Button = styled.a`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  cursor: pointer;
  font-family: Comic Sans MS;

  &:hover {
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
