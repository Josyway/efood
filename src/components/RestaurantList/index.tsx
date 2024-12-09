import { Restaurants } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List, Title } from './styles'

export type Props = {
  title: string
  restaurants: Restaurants[]
}

const RestaurantList = ({ title, restaurants }: Props) => (
  <div>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {restaurants.map((option) => (
          <Restaurant
            key={option.id}
            id={option.id}
            type={option.tipo}
            assessment={option.avaliacao}
            description={option.descricao}
            cover={option.capa}
            title={[option.titulo]}
          />
        ))}
      </List>
    </div>
  </div>
)

export default RestaurantList
