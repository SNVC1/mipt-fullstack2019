import styled, {createGlobalStyle} from 'styled-components'
import page_background from './img/background_2.png'
import background from './img/background.jpg'

export const Page = styled.div `
  background: #0b5010 url(${page_background});
  border: 2px ridge darkgreen;
  position: relative;
  top: 10px;
  width: 960px;
  margin: 0 auto;
`

export const GlobalStyle = createGlobalStyle `
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-size: cover;
    background: #0b1e00 url(${background}) fixed bottom;
  }
`