import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.salmon};
  padding: 8px;
  color: ${cores.berge};
  position: relative;

  ${ButtonLink} {
    background-color: ${cores.berge};
    color: ${cores.salmon};
    padding: 4px 84px;
    position: absolute;
    bottom: 8px;

    &:hover {
      border: 2px solid ${cores.berge};
      background-color: ${cores.salmon};
      color: ${cores.berge};
    }
  }
`
export const Image = styled.img`
  max-width: 304px;
  max-height: 167px;
`

export const Title = styled.h3`
  display: flex;
`
export const Descricao = styled.p`
  font-size: 14px;
  margin: 8px auto;
`
