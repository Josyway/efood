import Food from '../../models/Food'
import Foods from '../Foods'
import { List, Title } from './styled'

export type Props = {
  title: string
  foods: Food[]
}

const FoodsList = ({ title, foods }: Props) => (
  <div className="container">
    <Title>{title}</Title>
    <List>
      {foods.map((food) => (
        <Foods
          key={food.id}
          title={food.title}
          description={food.description}
          image={food.image}
          add={food.add}
        />
      ))}
    </List>
  </div>
)

export default FoodsList
