import Loader from '../Loader'
import Restaurant from '../Restaurant'

import * as S from './styles'

export type Props = {
  title: string
  restaurants: Restaurants[]
  isLoading: boolean
}

const RestaurantList = ({ title, restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
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
        </S.List>
      </div>
    </div>
  )
}

export default RestaurantList
