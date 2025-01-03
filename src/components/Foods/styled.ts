import { styled } from 'styled-components'
import { breackpoint, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.salmon};
  padding: 8px;
  color: ${colors.beige};
  position: relative;

  ${ButtonContainer} {
    background-color: ${colors.beige};
    color: ${colors.salmon};
    padding: 4px 84px;
    position: absolute;
    bottom: 8px;

    &:hover {
      border: 2px solid ${colors.beige};
      background-color: ${colors.salmon};
      color: ${colors.beige};
    }
  }
`
export const Image = styled.img`
  max-width: 304px;
  max-height: 167px;
  width: 100%;
  object-fit: cover;
`

export const Title = styled.h3`
  display: flex;
`
export const Description = styled.p`
  font-size: 14px;
  margin: 8px auto;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: flex;
  padding: 32px;
  max-width: 1024px;
  max-height: 344px;
  z-index: 1;
  position: relative;

  @media (max-width: ${breackpoint.desktop}) {
    width: 80%;
  }

  @media (max-width: ${breackpoint.tablet}) {
    width: 80%;
    max-height: 100%;
    display: block;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breackpoint.tablet}) {
      width: 240px;
      height: 240px;
    }
  }

  header {
    display: flex;
    justify-content: space-between;

    img {
      width: 16px;
      height: 16px;
      margin: 8px;
      cursor: pointer;
    }
  }

  p {
    margin: 16px 0;
    font-size: 14px;
  }

  button {
    border: none;
    padding: 4px 7px;
    font-size: 14px;
    font-weight: 700;
    background-color: ${colors.beige};
    color: ${colors.salmon};
    cursor: pointer;

    &:hover {
      border: 2px solid ${colors.beige};
      background-color: ${colors.salmon};
      color: ${colors.beige};
    }
  }
`
