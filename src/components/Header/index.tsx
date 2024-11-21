import Button from '../Button'
import Hero from '../../assets/images/logo/hero.png'
import Logo from '../../assets/images/logo/logo.png'

import { Cart, Imagem, Item } from './styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${Hero})` }}>
    <div className="container">
      <Item>
        <Button type="link" to="/" title="Restaurantes">
          Restaurante
        </Button>
        <img src={Logo} />
        <Cart>0 - produto(s) no carrinho</Cart>
      </Item>
    </div>
  </Imagem>
)

export default Header
