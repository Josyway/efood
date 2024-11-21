import Food from '../../models/Food'
import Header from '../../components/Header'
import FoodsList from '../../components/FoodsList'
import Banner from '../../components/Banner'

import banner from '../../assets/images/hamburgueria/hamburgue.png'
import cheeseburger from '../../assets/images/hamburgueria/cheeseburger.png'
import frango from '../../assets/images/hamburgueria/frango.png'
import picanha from '../../assets/images/hamburgueria/picanha.png'
import angus from '../../assets/images/hamburgueria/angus.png'
import vegetal from '../../assets/images/hamburgueria/vegetal.png'
import recheado from '../../assets/images/hamburgueria/recheado.png'

const restaurantes: Food[] = [
  {
    id: 1,
    title: ['Clássico cheeseburger'],
    add: 'Adicionar ao carrinho',
    description:
      'Com uma suculenta carne bovina, queijo derretido, alface, tomate e um molho delicioso para finalizar esta obra-prima.',
    image: cheeseburger
  },
  {
    id: 2,
    title: ['Hambúrguer de frango'],
    add: 'Adicionar ao carrinho',
    description:
      'Sempre feito com peito de frango, ele pode ser preparado com aveia, cebola, abobrinha, cenoura e manjericão, entre outros insumos e temperos.',
    image: frango
  },
  {
    id: 3,
    title: ['Hambúrguer de picanha'],
    add: 'Adicionar ao carrinho',
    description:
      'A picanha é nobre e muito saborosa e, justamente por isso, proporciona uma experiência única quando transformada em hambúrguer.',
    image: picanha
  },
  {
    id: 4,
    title: ['Hambúrguer angus'],
    add: 'Adicionar ao carrinho',
    description:
      'Angus é uma raça bovina de origem escocesa reconhecida ao redor do mundo por sua altíssima qualidade. ',
    image: angus
  },
  {
    id: 5,
    title: ['Hambúrguer vegetal'],
    add: 'Adicionar ao carrinho',
    description:
      'Entre os tipos mais conhecidos estão o hambúrguer de soja e o hambúrguer de ervilhas – ambos com sabor, textura e aparência de carne.',
    image: vegetal
  },
  {
    id: 6,
    title: ['Hambúrguer recheado'],
    add: 'Adicionar ao carrinho',
    description:
      'A opção recheada pode contar com os ingredientes de sempre – queijo, carne e alface – com alguns ingredientes a mais para deixá-lo mais elaborado.',
    image: recheado
  }
]

const Hamburgue = () => (
  <>
    <Header />
    <Banner title="Belo Burg" image={banner} origen="Hambusgueria" />
    <FoodsList foods={restaurantes} title="" />
  </>
)

export default Hamburgue
