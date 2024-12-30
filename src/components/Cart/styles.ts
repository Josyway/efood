import styled from 'styled-components'
import { breackpoint, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import bin from '../../assets/images/logo/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is_open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const Sadebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breackpoint.tablet}) {
    max-width: 260px;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    background-color: ${colors.beige};
    color: ${colors.salmon};
  }

  .empyt-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
    text-align: center;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.beigeDark};
  display: flex;
  padding: 8px 0;
  position: relative;
  margin-top: 8px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
    margin-left: 8px;
  }

  h3 {
    color: ${colors.salmon};
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    color: ${colors.salmon};
    font-size: 14px;
    font-weight: bold;
    margin-top: 16px;
  }

  button {
    background-image: url(${bin});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 0;
    cursor: pointer;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 16px;
`
