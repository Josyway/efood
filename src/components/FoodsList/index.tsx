import Foods from '../Foods'
import Loader from '../Loader'

import { List, Title } from './styled'

export type Props = {
  title: string
  foods: Menu[]
  isLoading: boolean
}

const FoodsList = ({ title, foods, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
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
