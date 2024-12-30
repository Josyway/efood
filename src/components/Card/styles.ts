import { styled } from 'styled-components'

import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  color: ${colors.beige};

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 32px 8px 0 7px;
`
