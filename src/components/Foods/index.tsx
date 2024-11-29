import Button from '../Button'
import { Card, Descricao, Title, Image, Modal, ModalContent } from './styled'
import Close from '../../assets/images/logo/fechar.png'
import { useState } from 'react'

type Props = {
  id: number
  title: string[]
  description: string
  image: string
  portion: string
  price: number
}

const Foods = ({ id, title, description, image, portion, price }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const getDescription = (description: string) => {
    if (description.length > 130) {
      return description.slice(0, 127) + '...'
    }
    return description
  }

  const preco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  return (
    <>
      <Card>
        <Image src={image} />
        <Title>{title}</Title>
        <Descricao>{getDescription(description)}</Descricao>
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
          <img src={image} />
          <div>
            <header>
              <h2>{title}</h2>
              <img src={Close} onClick={() => setModalAberto(false)} />
            </header>
            <p>{description}</p>
            <p>{portion}</p>
            <button>{`Adicione ao carrinho - ${preco(price)}`}</button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}

export default Foods
