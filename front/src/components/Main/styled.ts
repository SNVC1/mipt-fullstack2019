import styled from 'styled-components'

export const PageText = styled.div `
  text-align: center;
  font-size: 18px;
  color: white;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 20px;
`
export const Tabs = styled.div `
  width: 100%;
  color: white;
  &>input {
    display: none;
    &:checked+label {
      color: white;
      border: 1px solid #0b5010;
      border-bottom: none;
      background: green;
    }
  }
  &>div {
    display: none;
    border: 1px solid #0b5010;
    background: unset;
  }
  &>label {
    border-radius: 5px;
    display: inline-block;
    padding: 7px 15px;
    margin-top: 25px;
    width: 11.5%;
    text-align: center;
    border: 1px solid #0b5010;
    border-bottom: none;
    background: inherit;
    cursor: pointer;
  }
`

export const StartTab = styled.input `
  &:checked~.page-start_games_area {
    display: block;
  }
`
export const FinishTab = styled.input `
  &:checked~.page-finish_games_area {
    display: block;
  }
`

export const H1Decorator = styled.h1 `
  text-align: center;
  margin-top: 30px;
  color: yellow;
`