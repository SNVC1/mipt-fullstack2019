import React from 'react'
import { Link } from 'react-router-dom'

const Main: React.FC = () => {
    return (
        <div>
            <h1>Добро пожаловать на игровую площадку 1yBet!</h1>
            <div className="page-text">
                 Аннотация. Полностью одноранговое устройство системы электронных денег позволяет совершать электронные транзакции между участниками напрямую, минуя любые финансовые институты. Частично, эту задачу решает использование цифровых подписей, но необходимость доверенного лица для контроля за двойной тратой лишает этот подход основных преимуществ. Мы предлагаем децентрализованное решение проблемы двойной траты с использованием одноранговой (пиринговой) сети. Сеть ставит метки времени на транзакции, соединяя их в цепочку доказательств проделанной работы на основе хэширования. Сформированные таким образом записи невозможно изменить, не выполнив заново всего объема вычислений. Самая длинная версия цепочки служит не только подтверждением очередности событий, но и доказывает, что над ней произвел работу самый большой вычислительный сегмент сети. До тех пор пока большая часть вычислительных мощностей контролируется узлами, не объединенными с целью атаковать сеть, они будут генерировать самую длинную цепочку, опережая любых злоумышленников. Устройство самой сети очень простое: сообщения рассылаются на основе принципа «наименьших затрат», а узлы могут покидать сеть и снова подключаться к ней в любой момент, принимая самую длинную версию цепочки для восстановления пропущенной истории транзакций.
            </div>

            <div className="tabs">
                <input type="radio" name="inset" id="tab_1" checked/>
                <label htmlFor="tab_1">Раписание</label>

                <input type="radio" name="inset" id="tab_2"/>
                <label htmlFor="tab_2">Завершенные</label>

                <div className="page-start_games_area">
                    <div className="page-game">
                        <Link to='/game' className="game-ref">
                            <div className="game_time">22.09 19:30</div>
                            <div className="home_team">Челси</div>
                            <div className="home_team_goals">-</div>
                            <div className="guest_team_goals">-</div>
                            <div className="guest_team">Ливерпуль</div>
                        </Link>
                    </div>
                    <div className="page-game">
                        <Link to='/game' className="game-ref">
                            <div className="game_time">22.09 16:00</div>
                            <div className="home_team">Вест Хэм</div>
                            <div className="home_team_goals">-</div>
                            <div className="guest_team_goals">-</div>
                            <div className="guest_team">Манчестер Юнайтед</div>
                        </Link>
                    </div>
                    <div className="page-game">
                        <Link to='/game' className="game-ref">
                            <div className="game_time">13:30</div>
                            <div className="home_team">Лестер Сити</div>
                            <div className="home_team_goals">-</div>
                            <div className="guest_team_goals">-</div>
                            <div className="guest_team">Тоттенхэм</div>
                        </Link>
                    </div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                </div>
                <div className="page-finish_games_area">
                    <div className="page-game">
                        <Link to='/game' className="game-ref">
                            <div className="game_time">21.09</div>
                            <div className="home_team">Манчестер Сити</div>
                            <div className="home_team_goals">8</div>
                            <div className="guest_team_goals">0</div>
                            <div className="guest_team">Уотфорд</div>
                        </Link>
                    </div>
                    <div className="page-game">
                        <Link to='/game' className="game-ref">
                            <div className="game_time">22.09</div>
                            <div className="home_team">Вест Хэм</div>
                            <div className="home_team_goals">2</div>
                            <div className="guest_team_goals">0</div>
                            <div className="guest_team">Манчестер Юнайтед</div>
                        </Link>
                    </div>
                    <div className="page-game">
                        <Link to='/game' className="game-ref">
                            <div className="game_time">21.09</div>
                            <div className="home_team">Лестер Сити</div>
                            <div className="home_team_goals">2</div>
                            <div className="guest_team_goals">1</div>
                            <div className="guest_team">Тоттенхэм</div>
                        </Link>
                    </div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                    <div className="page-game"><Link to='/game' className="game-ref"></Link></div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Main;