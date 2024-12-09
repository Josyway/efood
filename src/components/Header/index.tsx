import Button from '../Button'
import Hero from '../../assets/images/logo/hero.png'
import Logo from '../../assets/images/logo/logo.png'

import { Cart, Imagem, Item } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => dispatch(open())

  return (
    <Imagem style={{ backgroundImage: `url(${Hero})` }}>
      <div className="container">
        <Item>
          <Button type="link" to="/" title="Restaurantes">
            Restaurante
          </Button>
          <img src={Logo} />
          <Cart onClick={openCart}>
            {items.length} - produto(s) no carrinho
          </Cart>
        </Item>
      </div>
    </Imagem>
  )
}

export default Header
