import React from 'react'
import { Link } from 'react-router-dom'
import header_background from '../img/header-background-1.jpg'

const Header: React.FC = () => {
    return (
        <div className="header">
            <img alt='header' src={header_background} height="150px" width="100%"/>
            <div className="header-menu">
                <Link to='/' className="header-ref">
                    <div className="header-item">Главная</div>
                </Link>
                <Link to='/signup' className="header-ref">
                    <div className="header-item">Регистрация</div>
                </Link>
                <Link to='/login' className="header-ref">
                    <div className="header-item">Войти</div>
                </Link>
            </div>
        </div>
    );
};

export default Header;