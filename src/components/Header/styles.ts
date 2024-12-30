import styled from 'styled-components'
import { ButtonLink } from '../Button/styles'
import { breackpoint, colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 144px;
  color: ${colors.salmon};
  background-size: cover;

  ${ButtonLink} {
    background-color: transparent;
    color: ${colors.salmon};
    font-size: 18px;
    font-weight: 900;

    @media (max-width: ${breackpoint.tablet}) {
      display: none;
    }
  }

  @media (max-width: ${breackpoint.tablet}) {
    span {
      display: none;
    }
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`

export const Cart = styled.div`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;

    @media (min-width: ${breackpoint.tablet}) {
      display: none;
    }
  }
`
