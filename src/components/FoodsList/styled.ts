import { styled } from 'styled-components'
import { breackpoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 36px;
  margin-top: 80px;

  @media (max-width: ${breackpoint.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: ${breackpoint.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
