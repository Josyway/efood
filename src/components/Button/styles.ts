import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.salmon};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.salmon};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 20px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
