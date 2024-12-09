import Button from '../Button'
import { Overlay, CartContainer, CartItem, Sadebar, Prices } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { preco } from '../Foods'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is_open' : ''}>
      <Overlay onClick={closeCart} />
      <Sadebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{preco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>Total de {preco(getTotalPrice())}</Prices>
        <Button title="Continuar com a entrega" type="button">
          Continuar com a compra
        </Button>
      </Sadebar>
    </CartContainer>
  )
}

export default Cart
