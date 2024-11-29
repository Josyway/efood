import { restaurant } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List, Title } from './styles'

export type Props = {
  title: string
  options: restaurant[]
}

const RestaurantList = ({ title, options }: Props) => (
  <div>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {options.map((option) => (
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
