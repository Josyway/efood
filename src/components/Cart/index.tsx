import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is_open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sadebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>Total de {parseToBrl(getTotalPrice(items))}</S.Prices>
            <Button
              title="Continuar com a entrega"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empyt-text">
            O carrinho está vazio, adicione pelo menos um item para continuar
            com a compra!
          </p>
        )}
      </S.Sadebar>
    </S.CartContainer>
  )
}

export default Cart
