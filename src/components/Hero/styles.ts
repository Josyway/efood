import styled from 'styled-components'
import { cores } from '../../styles'

export const Vector = styled.div`
  width: 100%;
  height: 384px;
  background-size: cover;
  img {
    margin-top: 32px;
  }
`
export const Container = styled.div`
  display: block;
  text-align: center;
  align-items: center;
`

export const Title = styled.p`
  max-width: 540px;
  height: 84px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${cores.salmon};
  margin: 138px auto;
`
