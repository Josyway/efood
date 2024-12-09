import Button from '../Button'
import { Card, Descricao, Title, Image, Modal, ModalContent } from './styled'
import Close from '../../assets/images/logo/fechar.png'
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Menu } from '../../pages/Home'

type Props = {
  id?: number
  nome?: string[]
  descricao?: string
  foto?: string
  porcao?: string
  preco?: number
  menu: Menu
}

export const preco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Foods = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  const [modalAberto, setModalAberto] = useState(false)

  const getDescription = (description: string) => {
    if (description.length > 130) {
      return description.slice(0, 127) + '...'
    }
    return description
  }

  return (
    <>
      <Card>
        <Image src={menu.foto} />
        <Title>{menu.nome}</Title>
        <Descricao>{getDescription(menu.descricao)}</Descricao>
        <Button
          type="button"
          onClick={() => setModalAberto(true)}
          title="Detalhe do Produto"
        >
          Adicionar ao carrinho
        </Button>
      </Card>
      <Modal className={modalAberto ? 'visible' : ''}>
        <ModalContent>
          <img src={menu.foto} />
          <div>
            <header>
              <h2>{menu.nome}</h2>
              <img src={Close} onClick={() => setModalAberto(false)} />
            </header>
            <p>{menu.descricao}</p>
            <p>{menu.porcao}</p>
            <button onClick={addToCart}>{`Adicione ao carrinho - ${preco(
              menu.preco
            )}`}</button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}

export default Foods
