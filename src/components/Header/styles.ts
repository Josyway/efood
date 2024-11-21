import styled from 'styled-components'
import { ButtonLink } from '../Button/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 144px;
  color: ${cores.salmon};
  background-size: cover;

  ${ButtonLink} {
    background-color: transparent;
    color: ${cores.salmon};
    font-size: 18px;
    font-weight: 900;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`

export const Cart = styled.div`
  color: ${cores.salmon};
  font-size: 18px;
  font-weight: 900;
`
