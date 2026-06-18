import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  vermelho: '#E66767',
  begeClaro: '#FFF8F2',
  bege: '#FFEBD9',
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
    background-color: ${cores.begeClaro};
    color: ${cores.vermelho};
  }
`
