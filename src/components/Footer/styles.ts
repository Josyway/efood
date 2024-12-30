import { styled } from 'styled-components'

import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.beigeDark};
  color: ${colors.salmon};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 120px;
  text-align: center;
`
export const Link = styled.a`
  margin-right: 8px;
  text-decoration: none;
  cursor: pointer;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionInfo = styled.p`
  font-size: 10px;
  max-width: 400px;
  margin: 40px auto;
`
