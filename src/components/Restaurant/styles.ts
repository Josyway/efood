import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Post = styled(Link)`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  color: ${colors.salmon};
  position: relative;
  text-decoration: none;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    max-height: 217px;
    object-fit: cover;
  }
`
export const Note = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 55px;

  div {
    display: flex;

    img {
      margin: 8px;
      max-width: 20px;
      max-height: 20px;
      margin: auto 8px;
    }
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const Info = styled.div`
  padding: 8px;
`
