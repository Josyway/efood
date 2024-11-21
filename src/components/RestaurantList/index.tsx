import Option from '../../models/Option'
import Restaurant from '../Restaurant'
import { List, Title } from './styles'

export type Props = {
  title: string
  options: Option[]
}

const RestaurantList = ({ title, options }: Props) => (
  <div>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {options.map((option) => (
          <Restaurant
            key={option.id}
            category={option.category}
            star={option.star}
            description={option.description}
            image={option.image}
            infos={option.infos}
            title={option.title}
            plus={option.plus}
          />
        ))}
      </List>
    </div>
  </div>
)

export default RestaurantList
