import styled from 'styled-components'

export const PageInfo = styled.div `
  color: yellow;
  margin: 30px 50px;
  font-size: 20px;
`
export const PageCurrentValue = styled.span `
  margin-left: 2%;
`

export const PageResults = styled.table `
  margin: 4%;
  display: block;
  overflow: auto;
  max-height: 838px;
  min-height: 538px;
  color: yellow;
  position: relative;
  top: 0;
  border-collapse: collapse;
  text-align: center;
`

export const TableDate = styled.th `
  width: 15%;
  height: 40px;
`

export const TableGame = styled.th `
  width: 40%;
  height: 40px;
`

export const TableType = styled.th `
  width: 10%;
  height: 40px;
`

export const TableSum = styled.th `
  width: 20%;
  height: 40px;
`

export const TableRes = styled.th `
  width: 30%;
  height: 40px;
`

export const TrDecorator = styled.tr `
  border: yellow solid 1px;
  height: 30px;
`

export const CaptionDecorator = styled.caption `
  margin: 10px;
`