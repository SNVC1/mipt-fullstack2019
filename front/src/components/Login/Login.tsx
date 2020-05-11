import React from 'react'
import * as S from './styled'

interface ILoginProps {
  onClose: () => void
}

const Login: React.FC<ILoginProps> = (props) => {
  const {onClose, children} = props
  const [captured, toggleCaptured] = React.useState<boolean>(false)
  return (
    <S.Wrapper onClick={() => {onClose()}}>
      <S.Inner
        onClick={(event) => {event.stopPropagation()}}
        onMouseDown={() => {toggleCaptured(true)}}
        onMouseUp={() => {toggleCaptured(false)}}
        captured = {captured}
      >
        {children}
      </S.Inner>
    </S.Wrapper>
  )
}

export default Login