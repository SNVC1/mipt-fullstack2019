import styled from 'styled-components'

export const LoginField = styled.div `
  color: white;
  margin-top: 4%;
  margin-left: 25%;
  display: flex;
  width: 100%;
`

export const PasswordField = styled.div `
  color: white;
  margin-top: 3%;
  margin-left: 25%;
  display: flex;
  width: 100%;
`

export const LoginInput = styled.input `
  margin-left: 6%;
  width: 30%;
`

export const PasswordInput = styled.input `
  margin-left: 5%;
  width: 30%;
`

export const LoginButton = styled.button<{disabled: boolean, cursorIsOver: boolean}> `
  color: yellow;
  padding: 10px 8px;
  font-size: 17px;
  height: 20%;
  width: 21%;
  margin-top: 3%;
  margin-left: 39%;
  border: 2px solid black
  border-radius: 5px;
  background-color: ${({disabled}) => disabled ? `darkslategrey` : 'darkgreen'};
  cursor: ${({disabled, cursorIsOver}) => !disabled && cursorIsOver ? `pointer` : `auto`};
`