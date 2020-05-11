import React from 'react'
import GamePreview from '../GamePreview'
import * as S from './styled'

interface IMainProps {
  fetchGames: () => void
  gameList: {
    upcoming: number[],
    finished: number[]
  }
  history?: {
    push: (url: string) => void
  }
}

const Main: React.FC<IMainProps> = (props) => {
  const {fetchGames, gameList} = props

  React.useEffect(() => {
    fetchGames()
  }, [])

  if (!gameList.upcoming || !gameList.finished) {
    return null
  }

  return (
    <div>
      <S.H1Decorator>Добро пожаловать!</S.H1Decorator>
      <S.PageText>
        Аннотация. Полностью одноранговое устройство системы электронных денег
        позволяет совершать электронные транзакции между участниками напрямую,
        минуя любые финансовые институты. Частично, эту задачу решает
        использование цифровых подписей, но необходимость доверенного лица для
        контроля за двойной тратой лишает этот подход основных преимуществ. Мы
        предлагаем децентрализованное решение проблемы двойной траты с
        использованием одноранговой (пиринговой) сети. Сеть ставит метки времени
        на транзакции, соединяя их в цепочку доказательств проделанной работы на
        основе хэширования. Сформированные таким образом записи невозможно
        изменить, не выполнив заново всего объема вычислений. Самая длинная
        версия цепочки служит не только подтверждением очередности событий, но и
        доказывает, что над ней произвел работу самый большой вычислительный
        сегмент сети. До тех пор пока большая часть вычислительных мощностей
        контролируется узлами, не объединенными с целью атаковать сеть, они
        будут генерировать самую длинную цепочку, опережая любых
        злоумышленников. Устройство самой сети очень простое: сообщения
        рассылаются на основе принципа «наименьших затрат», а узлы могут
        покидать сеть и снова подключаться к ней в любой момент, принимая самую
        длинную версию цепочки для восстановления пропущенной истории
        транзакций.
      </S.PageText>

      <S.Tabs>
        <S.StartTab type="radio" name="inset" id="tab_1" />
        <label htmlFor="tab_1">Расписание</label>

        <S.FinishTab type="radio" name="inset" id="tab_2" defaultChecked={true} />
        <label htmlFor="tab_2">Завершенные</label>

        <div className="page-start_games_area">
          {gameList.upcoming.map((gameId, index) => (
            <GamePreview key={index} gameId={gameId}/>
          ))}
        </div>
        <div className="page-finish_games_area">
          {gameList.finished.map((gameId, index) => (
            <GamePreview key={index} gameId={gameId} />
          ))}
        </div>
      </S.Tabs>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Main
