import Option from '../../models/Option'
import Hero from '../../components/Hero'
import ProductsList from '../../components/RestaurantList'

import star from '../../assets/images/logo/star.png'
import sushi from '../../assets/images/japonesa/sushicard.png'
import camarao from '../../assets/images/italiana/camarao.png'
import tapioca from '../../assets/images/nordestina/tapiocacard.png'
import pao_minas from '../../assets/images/mineira/pao_minas.png'
import hamburgue from '../../assets/images/hamburgueria/hamburgue.png'
import pizza from '../../assets/images/pizzaria/pizzacard.png'

const restaurantes: Option[] = [
  {
    id: 1,
    title: 'Hioki Suchi',
    category: '4,7',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque do dia', 'Japonesa'],
    image: sushi,
    plus: '/japonesa'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: '4,8',
    star: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: camarao,
    plus: '/italiana'
  },
  {
    id: 3,
    title: 'Delicia Nordestina',
    category: '5,0',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Nordestina'],
    image: tapioca,
    plus: '/nordestina'
  },
  {
    id: 4,
    title: 'Forno Mineiro',
    category: '4,7',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Mineira'],
    image: pao_minas,
    plus: '/mineira'
  },
  {
    id: 5,
    title: 'La Pizzaria',
    category: '4,9',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Doceria'],
    image: pizza,
    plus: '/pizzaria'
  },
  {
    id: 6,
    title: 'Belo Burg',
    category: '4,8',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Hamburgueria'],
    image: hamburgue,
    plus: '/hamburgueria'
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList options={restaurantes} title="" />
  </>
)

export default Home
