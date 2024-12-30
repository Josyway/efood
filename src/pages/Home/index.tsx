import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant, isLoading } = useGetRestaurantQuery()

  if (!restaurant) {
    return <Loader />
  }
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurant} title="" isLoading={isLoading} />
    </>
  )
}

export default Home
