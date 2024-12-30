import { useParams } from 'react-router-dom'

import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

import { useGetFoodQuery } from '../../services/api'
import Loader from '../../components/Loader'

type FoodParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as FoodParams

  const { data: restaurant, isLoading } = useGetFoodQuery(id)
  if (!restaurant) {
    return <Loader />
  }
  return (
    <>
      <Header />
      <Banner restaurant={restaurant} />
      <FoodsList foods={restaurant.cardapio} title={''} isLoading={isLoading} />
    </>
  )
}

export default Profile
