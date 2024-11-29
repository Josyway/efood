import styled from 'styled-components'

import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  color: ${cores.branco};
  object-fit: cover;
  align-items: center;

  .container {
    padding-top: 340px;
    display: flex;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
  .container {
    z-index: 1;
    position: relative;
  }
`
export const Presentation = styled.div`
  position: absolute;
  top: 24px;
`

export const Origin = styled.p`
  font-size: 32px;
  font-weight: 100;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-top: 140px;
`
