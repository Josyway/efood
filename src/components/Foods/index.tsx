import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import Close from '../../assets/images/logo/fechar.png'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styled'

type Props = {
  id?: number
  nome?: string[]
  descricao?: string
  foto?: string
  porcao?: string
  preco?: number
  menu: Menu
}

const Foods = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  const [modalAberto, setModalAberto] = useState(false)

  const getDescription = (Text: string) => {
    if (Text.length > 130) {
      return Text.slice(0, 127) + '...'
    }
    return Text
  }

  return (
    <>
      <S.Card
        title={`Clique aqui para saber mais detalhe do prato ${menu.nome}`}
      >
        <S.Image src={menu.foto} />
        <S.Title>{menu.nome}</S.Title>
        <S.Description>{getDescription(menu.descricao)}</S.Description>
        <Button
          type="button"
          onClick={() => setModalAberto(true)}
          title="Detalhe do Produto"
        >
          Adicionar ao carrinho
        </Button>
      </S.Card>
      <S.Modal className={modalAberto ? 'visible' : ''}>
        <S.ModalContent>
          <img src={menu.foto} />
          <div>
            <header>
              <h2>{menu.nome}</h2>
              <img src={Close} onClick={() => setModalAberto(false)} />
            </header>
            <p>{menu.descricao}</p>
            <p>{menu.porcao}</p>
            <button onClick={addToCart}>{`Adicione ao carrinho - ${parseToBrl(
              menu.preco
            )}`}</button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </S.Modal>
    </>
  )
}

export default Foods
