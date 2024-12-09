import { useParams } from 'react-router-dom'

import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { useGetFoodQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetFoodQuery(id!)
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
