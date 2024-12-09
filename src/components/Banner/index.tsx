import { Restaurants } from '../../pages/Home'
import { Imagem, Titulo, Origin, Presentation } from './styles'

type Props = {
  restaurant: Restaurants
}

const Banner = ({ restaurant }: Props) => (
  <Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <Presentation>
        <Origin>{restaurant.tipo}</Origin>
        <Titulo>{restaurant.titulo}</Titulo>
      </Presentation>
    </div>
  </Imagem>
)

export default Banner
