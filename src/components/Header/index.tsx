import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '../Button'
import Hero from '../../assets/images/logo/hero.png'
import Logo from '../../assets/images/logo/logo.png'
import cart from '../../assets/images/logo/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => dispatch(open())

  return (
    <S.Image style={{ backgroundImage: `url(${Hero})` }}>
      <div className="container">
        <S.Item>
          <Button type="link" to="/" title="Restaurantes">
            Restaurante
          </Button>
          <Link title="Clique aqui para retornar a pagina home" to="/">
            <img src={Logo} />
          </Link>
          <S.Cart onClick={openCart}>
            <span>{items.length} - produto(s) no carrinho</span>
            <img src={cart} />
          </S.Cart>
        </S.Item>
      </div>
    </S.Image>
  )
}

export default Header
