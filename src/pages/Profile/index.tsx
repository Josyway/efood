import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { restaurant } from '../Home'
import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

const Profile = () => {
  const { id } = useParams()

  const [restaurant, setRestaurante] = useState<restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner restaurant={restaurant} />
      <FoodsList foods={restaurant.cardapio} title={''} />
    </>
  )
}

export default Profile
