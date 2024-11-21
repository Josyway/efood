import Food from '../../models/Food'
import Header from '../../components/Header'

import banner from '../../assets/images/japonesa/sushicard.png'
import sushi from '../../assets/images/japonesa/sushi.png'
import sashimi from '../../assets/images/japonesa/sashimi.png'
import yakisoba from '../../assets/images/japonesa/yakisoba.png'
import nigiri from '../../assets/images/japonesa/nigiri.png'
import nikuman from '../../assets/images/japonesa/nikuman.png'
import temaki from '../../assets/images/japonesa/temaki.png'
import FoodsList from '../../components/FoodsList'
import Banner from '../../components/Banner'

const restaurantes: Food[] = [
  {
    id: 1,
    title: ['Suchi'],
    add: 'Adicionar ao carrinho',
    description:
      'É um bolinho de arroz temperado com vinagre e coberto por uma fatia de peixe cru, misturado com algas ou frutos do mar.',
    image: sushi
  },
  {
    id: 2,
    title: ['Sashimi'],
    add: 'Adicionar ao carrinho',
    description:
      'É feito de fatias finas de peixe ou de frutos do mar em estado cru. Pode ser usado peixe de água doce ou salgada.',
    image: sashimi
  },
  {
    id: 3,
    title: ['Temaki'],
    add: 'Adicionar ao carrinho',
    description:
      'É um cone de alga recheado com arroz, peixe e pepino. A alga marinha do temaki tem que estar bem sequinha e crocante.',
    image: temaki
  },
  {
    id: 4,
    title: ['Yakisoba'],
    add: 'Adicionar ao carrinho',
    description:
      'É uma uma variação de macarrão semi-frito na chapa, servido com legumes e molho shoyu.',
    image: yakisoba
  },
  {
    id: 5,
    title: ['Nigiri'],
    add: 'Adicionar ao carrinho',
    description:
      'É um bolinho de arroz em forma alongada coberto com fatias de peixe cru ou polvo e camarões.',
    image: nigiri
  },
  {
    id: 6,
    title: ['Nikuman'],
    add: 'Adicionar ao carrinho',
    description:
      'é uma espécie de pão japonês cozido no vapor e com recheio de carne de porco.',
    image: nikuman
  }
]

const Jamonesa = () => (
  <>
    <Header />
    <Banner title="Hioki Suchi" image={banner} origen="Japonesa" />
    <FoodsList foods={restaurantes} title="" />
  </>
)

export default Jamonesa
