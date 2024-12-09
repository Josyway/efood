import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

export type Menu = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { data: restaurant, isLoading } = useGetRestaurantQuery()

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurant} title="" />
    </>
  )
}

export default Home
