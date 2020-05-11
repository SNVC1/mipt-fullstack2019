import React from 'react'
import header_background from '../../img/header-background-1.jpg'
import Login from '../Login'
import LoginForm from '../LoginForm'
import getIsAuth from '../../utils/getIsAuth'
import * as S from './styled'

const Header: React.FC = () => {
  const [LoginActive, LoginActivate] = React.useState<boolean>(false)
  const LoginClick = React.useCallback(
    (event) => {
      LoginActivate(true)
    }, []
  )

  const LogoutClick = React.useCallback(() => {
    window.localStorage.clear()
    window.location.reload()
  }, [])

  return (
    <div>
      <img alt="header" src={header_background} height="150px" width="100%" />
      <S.HeaderMenu>
        <S.HeaderRef to="/">
          <S.HeaderItem>Главная</S.HeaderItem>
        </S.HeaderRef>

        {!getIsAuth() ? (
          <S.HeaderRef to="/signup">
            <S.HeaderItem>Регистрация</S.HeaderItem>
          </S.HeaderRef>
        ) : (
          <S.HeaderRef to="/personal">
            <S.HeaderItem>Личный кабинет</S.HeaderItem>
          </S.HeaderRef>
        )
        }
        {!getIsAuth() ? (
          <S.HeaderRef to={"/"} onClick={LoginClick}>
            <S.HeaderItem >Войти</S.HeaderItem>
          </S.HeaderRef>
          ) :
          (
            <S.HeaderRef to={"/"} onClick={LogoutClick}>
              <S.HeaderItem >Выйти</S.HeaderItem>
            </S.HeaderRef>
          )
        }
      </S.HeaderMenu>
      {LoginActive && <Login onClose={() => {LoginActivate(false)}}>
        <LoginForm/>
      </Login>}
    </div>
  )
}



export default Header