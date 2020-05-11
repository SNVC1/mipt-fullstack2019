import React from 'react'
import BetLine from '../Bet'
import * as S from './styled'

interface IPersonalProps {
  fetchBets: () => void
  betList: number[]
  history?: {
    push: (url: string) => void
  }
}

const Personal: React.FC<IPersonalProps> = (props) => {
  let current_sum = 500;
  const {fetchBets, betList} = props

  React.useEffect(() => {
    fetchBets()
  }, [])

  if (!betList) {
    return null
  }

  return (
    <div>
      <S.PageInfo className="page-info">
        <span className="page-current_text">Ваш текущий депозит:</span>
        <S.PageCurrentValue className="page-current_value">{current_sum}</S.PageCurrentValue>
      </S.PageInfo>
      <S.PageResults className="page-results">
        <S.CaptionDecorator>ИСТОРИЯ ВАШИХ ОПЕРАЦИЙ</S.CaptionDecorator>
        <S.TrDecorator>
          <S.TableDate className="table-date">Дата</S.TableDate>
          <S.TableGame className="table-game">Матч</S.TableGame>
          <S.TableType className="table-type">Тип Ставки</S.TableType>
          <S.TableSum className="table-sum">Сумма ставки</S.TableSum>
          <S.TableRes className="table-res">Выигрыш</S.TableRes>
        </S.TrDecorator>
        {betList.map((betId, index) => (
          <BetLine key={index} betId={betId} />
        ))}
      </S.PageResults>
    </div>
  )
}

export default Personal
