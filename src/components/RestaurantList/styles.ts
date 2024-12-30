import { styled } from 'styled-components'

import { breackpoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px;
  margin-top: 80px;

  @media (min-width: ${breackpoint.desktop}) {
    gap: 20px;
  }

  @media (max-width: ${breackpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
