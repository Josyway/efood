import Food from '../../models/Food'

import star from '../../assets/images/star.png'

import sushi from '../../assets/images/sushi.png'
import camarao from '../../assets/images/camarao.png'
import tapioca from '../../assets/images/tapioca.png'
import pao_minas from '../../assets/images/pao_minas.png'
import hamburgue from '../../assets/images/hamburgue.png'
import torta from '../../assets/images/torta.png'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

const restaurantes: Food[] = [
  {
    id: 1,
    title: 'Hioki Suchi',
    category: '4,9',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque do dia', 'Japonesa'],
    image: sushi,
    plus: 'Saiba mais'
  },
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    category: '4,6',
    star: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: camarao,
    plus: 'Saiba mais'
  },
  {
    id: 1,
    title: 'Delicia Nordestina',
    category: '4,9',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Nordestina'],
    image: tapioca,
    plus: 'Saiba mais'
  },
  {
    id: 1,
    title: 'Forno Mineiro',
    category: '4,9',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Mineira'],
    image: pao_minas,
    plus: 'Saiba mais'
  },
  {
    id: 1,
    title: 'La Vita Doces',
    category: '4,9',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Doceria'],
    image: torta,
    plus: 'Saiba mais'
  },
  {
    id: 1,
    title: 'Belo Burg',
    category: '4,9',
    star: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Hamburgueria'],
    image: hamburgue,
    plus: 'Saiba mais'
  }
]

const Doces = () => (
  <>
    <Hero />
    <ProductsList foods={restaurantes} title="" />
  </>
)

export default Doces
