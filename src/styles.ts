import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFF8F2',
  salmon: '#E66767',
  white: '#FFFFFF',
  beigeDark: '#FFEBD9'
}

export const breackpoint = {
  desktop: '1024px',
  tablet: '760px'
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
  background-color: ${colors.beige};
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breackpoint.desktop}){
    max-width: 80%;
  }
}
`
