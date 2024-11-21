import Food from '../../models/Food'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import FoodsList from '../../components/FoodsList'

import banner from '../../assets/images/mineira/pao_minas.png'
import frango from '../../assets/images/mineira/frango.png'
import tutu from '../../assets/images/mineira/tutu-de-feijao.png'
import feijão from '../../assets/images/mineira/feijao-tropeiro.png'
import atolada from '../../assets/images/mineira/vaca-atolada.png'
import pao_queijo from '../../assets/images/mineira/pao_queigo.png'
import goiabada from '../../assets/images/mineira/goiabada.png'

const restaurantes: Food[] = [
  {
    id: 1,
    title: ['Frango com quiabo'],
    add: 'Adicionar ao carrinho',
    description:
      'A mistura desses dois ingredientes rende um dos pratos mais clássicos para os mineiros, feito a partir de um ensopado de frango caipira.',
    image: frango
  },
  {
    id: 2,
    title: ['Tutu de feijão'],
    add: 'Adicionar ao carrinho',
    description:
      'O feijão, um dos ingredientes mais importantes para os mineiros, se transforma no saboroso tutu quando é cozido, temperado, batido e misturado com farinha de milho ou de mandioca.',
    image: tutu
  },
  {
    id: 3,
    title: ['Feijão Tropeiro'],
    add: 'Adicionar ao carrinho',
    description:
      'Mais uma vez, o feijão estrela uma das receitas mais tradicionais de Minas Gerais, em um prato que surgiu com os tropeiros, que misturavam farinha, carne e ovos ao feijão.',
    image: feijão
  },
  {
    id: 4,
    title: ['Vaca atolada'],
    add: 'Adicionar ao carrinho',
    description:
      ' É um prato simples, composto de carne bovina cozida com mandioca. Geralmente, utiliza-se a costela, que deve ficar bem macia.',
    image: atolada
  },
  {
    id: 5,
    title: ['Pão de queijo'],
    add: 'Adicionar ao carrinho',
    description:
      ' É feito com polvilho – seja ele doce, azedo, ou uma mistura dos dois – e mescla alguns tipos de queijo para que tenha seu sabor único.',
    image: pao_queijo
  },
  {
    id: 6,
    title: ['Goiabada cascão'],
    add: 'Adicionar ao carrinho',
    description:
      'Diferentemente da goiabada comum, a cascão possui pedaços de casca em seu interior – o que justifica o seu nome. ',
    image: goiabada
  }
]

const Mineira = () => (
  <>
    <Header />
    <Banner title="Forno Mineiro" image={banner} origen="Mineira" />
    <FoodsList foods={restaurantes} title="" />
  </>
)

export default Mineira
