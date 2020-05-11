import styled from 'styled-components'

export const PageTime = styled.div `
  text-align: center;
  font-size: 20px;
  margin-top: 60px;
  color: yellow;
`

export const PageContainer = styled.div `
  color: yellow;
  display: flex;
  justify-content: normal;
`

export const PageHomeClub = styled.div `
  display: flex;
  justify-content: right;
  width: 50%;
  height: 240px;
`

export const PageHomeClubInfo = styled.div `
  max-width: 200px;
  margin-right: 15%;
`

export const PageHomeClubName = styled.div `
  margin-top: 5px;
  font-size: 30px;
  text-align: center;
`

export const PageHomeClubScore = styled.div `
  margin-top: 30px;
  margin-right: 3%;
  padding: 0 15px;
  height: 130px;
  background-color: red;
  border-radius: 5px;
  width: 46px;
  font-size: 90px;
`

export const PageGuestClub = styled.div `
  display: flex;
  justify-content: left;
  width: 50%;
  height: 240px;
`

export const PageGuestClubScore = styled.div `
  margin-top: 30px;
  margin-left: 3%;
  padding: 0 15px;
  height: 130px;
  border-radius: 5px;
  background-color: red;
  text-align: left;
  width: 46px;
  font-size: 90px;
`

export const PageGuestClubInfo = styled.div `
  max-width: 200px;
  margin-left: 15%;
`

export const PageGuestClubName = styled.div `
  margin-top: 5px;
  font-size: 30px;
  text-align: center;
`

export const PageBetBlock = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
  color: yellow;
  &>input {
    display: none;
  }
  &>label {
    width: 90px;
    color: yellow;
    display: inline-block;
    padding: 7px;
    text-align: center;
    border: 1px solid yellow;
    background: inherit;
    cursor: pointer;
    &:hover {
      border: 1px solid green;
      color: green;
    }
  }
  &>input:checked+label {
    color: white;
    border: 1px solid green;
    background: green;
  }
`

export const PageBetValueBlock = styled.div `
  display: flex;
  margin-top: 50px;
  color: yellow;
  margin-left: 60px;
  &>label {
    margin-left: 20px;
  }
`

export const PushBetButton = styled.button `
  width: 100px;
  margin-left: 10%;
  background-color: unset;
  font-weight: bolder;
  color: greenyellow;
  &:disabled {
    color: silver;
    border: 1px silver solid;
  }
`

export const InputBetSum = styled.input `
  width: 200px;
`