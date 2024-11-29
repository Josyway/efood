import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.salmon};
  padding: 8px;
  color: ${cores.berge};
  position: relative;

  ${ButtonContainer} {
    background-color: ${cores.berge};
    color: ${cores.salmon};
    padding: 4px 84px;
    position: absolute;
    bottom: 8px;

    &:hover {
      border: 2px solid ${cores.berge};
      background-color: ${cores.salmon};
      color: ${cores.berge};
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
export const Descricao = styled.p`
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
  background-color: ${cores.salmon};
  color: ${cores.berge};
  display: flex;
  padding: 32px;
  max-width: 1024px;
  max-height: 344px;
  z-index: 1;
  position: relative;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
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
    background-color: ${cores.berge};
    color: ${cores.salmon};
  }
`
