import React from 'react'
import * as S from './styled'
import {URL} from '../../actions/games'

const LoginForm: React.FC = () => {

  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')

  const LoginSubmit = React.useCallback(async (event) => {
    event.preventDefault()
    const data = await fetch(`${URL}token/`, {
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        "username": login,
        "password": password
      })
    })
    const response = await data.json()
    const {access, refresh} = response
    window.localStorage.setItem('access', access)
    window.localStorage.setItem('refresh', refresh)
    window.location.reload()
    }, [login, password]
  )

  const [cursorIsOver, setIsOver] = React.useState(false)

  const onChangeLogin = React.useCallback((event) => {
    setLogin(event.target.value)
  }, [login])

  const onChangePassword = React.useCallback((event) => {
    setPassword(event.target.value)
  }, [password])

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
        onClick={LoginSubmit}
        onMouseEnter={() => {setIsOver(true)}}
        onMouseLeave={() => {setIsOver(false)}}
        disabled={login.length == 0 || password.length == 0}
        cursorIsOver={cursorIsOver}
      >
        Авторизоваться
      </S.LoginButton>
    </div>
  )
}

export default LoginForm