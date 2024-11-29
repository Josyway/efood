import { Menu } from '../../pages/Home'
import Foods from '../Foods'
import { List, Title } from './styled'

export type Props = {
  title: string
  foods: Menu[]
}

const FoodsList = ({ title, foods }: Props) => (
  <div className="container">
    <Title>{title}</Title>
    <List>
      {foods.map((food) => (
        <Foods
          key={food.id}
          id={food.id}
          image={food.foto}
          title={[food.nome]}
          description={food.descricao}
          portion={food.porcao}
          price={food.preco}
        />
      ))}
    </List>
  </div>
)

export default FoodsList
