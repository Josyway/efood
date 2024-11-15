import Food from '../../models/Food'
import Product from '../Product'
import { List, Title } from './styled'

export type Props = {
  title: string
  foods: Food[]
}

const ProductsList = ({ title, foods }: Props) => (
  <div>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            category={food.category}
            star={food.star}
            description={food.description}
            image={food.image}
            infos={food.infos}
            title={food.title}
            plus={food.plus}
          />
        ))}
      </List>
    </div>
  </div>
)

export default ProductsList
