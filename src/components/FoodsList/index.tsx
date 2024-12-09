import { Menu } from '../../pages/Home'
import Foods from '../Foods'
import { List, Title } from './styled'

export type Props = {
  title: string
  foods: Menu[]
}

const FoodsList = ({ title, foods }: Props) => {
  return (
    <div className="container">
      <Title>{title}</Title>
      <List>
        {foods.map((food) => (
          <Foods
            key={food.id}
            id={food.id}
            nome={[food.nome]}
            foto={food.foto}
            descricao={food.descricao}
            porcao={food.porcao}
            preco={food.preco}
            menu={food}
          />
        ))}
      </List>
    </div>
  )
}

export default FoodsList
