import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  color: ${colors.white};
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

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-top: 140px;
`
