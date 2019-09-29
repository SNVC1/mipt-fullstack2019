import React from 'react';
import man_city from '../img/man_city.png'
import arsenal from '../img/arsenal.png'
import tottenham from '../img/tottenham.png'
import man_united from '../img/man_united.png'
import liverpool from '../img/liverpool.png'
import chelsea from '../img/chelsea.png'
import aston_villa from '../img/aston_villa.png'
import bornemouth from '../img/bornemouth.png'
import brighton from '../img/brighton.png'
import burnley from '../img/burnley.png'
import crystal_palace from '../img/crystal_palace.png'
import everton from '../img/everton.png'
import leicester from '../img/leicester.png'
import newcastle from '../img/newcastle.png'
import norwich from '../img/norwich.png'
import sheffield from '../img/sheffield.png'
import southampton from '../img/southampton.png'
import watford from '../img/watford.png'
import west_ham from '../img/west_ham.png'
import wolverhampton from '../img/wolverhampton.png'
import header_background from '../img/header-background-1.jpg'

const Game: React.FC = () => {
    return (
        <div>
            <div className="page-time">
                27.09
            </div>

            <div className="page-container">
                <div className="page-home_club">
                    <div className="page-home_club_info">
                        <img className="page-home_club_logo" src={man_city}/>
                            <div className="page-home_club_name">Манчестер Сити</div>
                    </div>
                    <div className="page-home_club_score">8</div>
                </div>
                <div className="page-guest_club">
                    <div className="page-guest_club_score">0</div>
                    <div className="page-guest_club_info">
                        <img className="page-guest_club_logo" src={watford}/>
                            <div className="page-guest_club_name">Уотфорд</div>
                    </div>
                </div>
            </div>
            <form className="page-bet_block">
                <input type="radio" name="bet" id="bet_1"/>
                <label htmlFor="bet_1">П1 1.13</label>
                <input type="radio" name="bet" id="bet_2"/>
                <label htmlFor="bet_2">X 8.34</label>
                <input type="radio" name="bet" id="bet_3"/>
                <label htmlFor="bet_3">П2 27.33</label>
                <input type="radio" name="bet" id="bet_4"/>
                <label htmlFor="bet_4">ОЗ да 2.18</label>
                <input type="radio" name="bet" id="bet_5"/>
                <label htmlFor="bet_5">ОЗ нет 1.9</label>
            </form>

            <div className="page-bet_value_block">
                <input id="input_1" type="number" required/>
                <label htmlFor="input_1">Сумма ставки</label>
            </div>

            <div className="page-accept_block">

            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Game;