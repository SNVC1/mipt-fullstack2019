import styled, {keyframes} from 'styled-components'

const fade = keyframes `
from {
  opacity: 0
}
to {
  opacity: 1
}
`

const rise = keyframes `
from {
  width: 330px;
  height: 165px;;
}
to {
  width: 300px;
  height: 150px;
}
`

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: auto;
  animation-name: ${fade};
  animation-duration: 0.5;
`

export const Inner = styled.div<{captured: boolean}>`
  color: yellow;
  width: 300px;
  height: 150px;
  background-color: black;
  border: 2px solid ${({captured}) => (captured ? `green` : `yellow`)};
  cursor: pointer;
  animation-name: ${rise};
  animation-duration: 0.4s;
  display: flex;
`