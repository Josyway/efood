import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import ProductsList from '../../components/RestaurantList'

export type Menu = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

export type restaurant = {
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
  const [restaurant, setRestaurant] = useState<restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Hero />
      <ProductsList options={restaurant} title="" />
    </>
  )
}

export default Home
