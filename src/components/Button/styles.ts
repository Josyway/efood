import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 14px;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 14px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
