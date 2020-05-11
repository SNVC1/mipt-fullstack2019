import React from 'react'
import * as S from './styled'
import {URL} from '../../actions/games'

const SignUp: React.FC = (props: any) => {
  const [username, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [cursorIsOver, setIsOver] = React.useState(false)

  const onChangeLogin = React.useCallback((event) => {
    setLogin(event.target.value)
  }, [username])

  const onChangePassword = React.useCallback((event) => {
    setPassword(event.target.value)
  }, [password])

  const RegistrationSubmit = React.useCallback(async (event) => {
    const request = JSON.stringify({username, password})
    await fetch(`${URL}player_create/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: request
    })

  }, [username, password])

  return (
    <div>
      <S.LoginField>
        <span>Логин</span>
        <S.LoginInput
          onChange={onChangeLogin}
          type={'text'}
        />
      </S.LoginField>
      <S.PasswordField>
        <span>Пароль</span>
        <S.PasswordInput
          onChange={onChangePassword}
          type={'password'}
        />
      </S.PasswordField>
      <S.LoginButton
        cursorIsOver={cursorIsOver}
        onMouseEnter={() => {setIsOver(true)}}
        onMouseLeave={() => {setIsOver(false)}}
        onClick={RegistrationSubmit}
        disabled={username.length == 0 || password.length == 0}
      >
        Зарегистрироваться
      </S.LoginButton>
    </div>
  )
}

export default SignUp