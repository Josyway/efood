import { createGlobalStyle } from 'styled-components'

export const cores = {
  berge: '#FFF8F2',
  salmon: '#E66767',
  branco: '#FFFFFF',
  bergeEscuro: '#FFEBD9'
}

export const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${cores.berge};
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
