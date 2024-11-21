import Food from '../../models/Food'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'

import banner from '../../assets/images/pizzaria/pizzacard.png'
import calabrasa from '../../assets/images/pizzaria/calabrasa.png'
import portuguesa from '../../assets/images/pizzaria/portuguesa.png'
import marguerita from '../../assets/images/pizzaria/marguerita.png'
import frango from '../../assets/images/pizzaria/frango.png'
import muçarela from '../../assets/images/pizzaria/muçarela.png'
import napolitana from '../../assets/images/pizzaria/napolitana.png'

const restaurantes: Food[] = [
  {
    id: 1,
    title: ['Calabresa'],
    add: 'Adicionar ao carrinho',
    description:
      'Uma pizza simples, mas que conquistou uma legião de fãs em todo o mundo. Está presente em mais de 30% dos pedidos.',
    image: calabrasa
  },
  {
    id: 2,
    title: ['Portuguesa'],
    add: 'Adicionar ao carrinho',
    description:
      'Ovos, cebola, azeitona, ervilha, queijo e presunto dão sabor a segunda pizza mais queridinha dos brasileiros.',
    image: portuguesa
  },
  {
    id: 3,
    title: ['Marguerita'],
    add: 'Adicionar ao carrinho',
    description:
      'Sabor ícone da Itália que leva apenas molho, muçarela, tomate e manjericão. É uma ótima opção para quem não come carne.',
    image: marguerita
  },
  {
    id: 4,
    title: ['Frango com catupiry'],
    add: 'Adicionar ao carrinho',
    description:
      'A mistura de proteína e cremosidade que deu muito certo, fará com que você desfrute de um sabor único.',
    image: frango
  },
  {
    id: 5,
    title: ['Muçarela'],
    add: 'Adicionar ao carrinho',
    description:
      'Simples e perfeita como tem que ser. A número 1 entre os paulistanos.',
    image: muçarela
  },
  {
    id: 1,
    title: ['Napolitana'],
    add: 'Adicionar ao carrinho',
    description: 'Um sabor genuinamente italiano que não pode faltar.',
    image: napolitana
  }
]

const Doces = () => (
  <>
    <Header />
    <Banner title="La Pizzaria" image={banner} origen="Pizzaria" />
    <FoodsList foods={restaurantes} title="" />
  </>
)

export default Doces
