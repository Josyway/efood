import * as S from './styles'

type Props = {
  restaurant: Restaurants
}

const Banner = ({ restaurant }: Props) => (
  <S.Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <S.Presentation>
        <S.Origin>{restaurant.tipo}</S.Origin>
        <S.Title>{restaurant.titulo}</S.Title>
      </S.Presentation>
    </div>
  </S.Image>
)

export default Banner
