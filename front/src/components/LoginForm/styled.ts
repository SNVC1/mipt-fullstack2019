import styled, {keyframes} from 'styled-components'

const button_enabled = keyframes `
from {
  background-color: darkgreen
}
50% {
  background-color: white
}
to {
  background-color: darkgreen
}
`

export const LoginInput = styled.input `
  margin-left: 14%;
  width: 100%;
`

export const PasswordInput = styled.input `
  margin-left: 10%;
  width: 100%;
`

export const LoginButton = styled.button<{disabled: boolean, cursorIsOver: boolean}> `
  height: 20%;
  width: 100%;
  margin-top: 10%;
  margin-left: 25%;
  border: 2px solid black
  border-radius: 5px;
  background-color: ${({disabled}) => disabled ? `darkslategrey` : 'darkgreen'};
  cursor: ${({disabled}) => disabled ? `auto` : 'pointer'};
  color: white;
  animation-name: ${({disabled, cursorIsOver}) => !disabled && cursorIsOver ? button_enabled : null};
  animation-duration: 0.05s;
`

export const LoginField = styled.div `
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  width: 120%;
`

export const PasswordField = styled.div `
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  width: 120%;
`