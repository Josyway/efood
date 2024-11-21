import Food from '../../models/Food'
import FoodsList from '../../components/FoodsList'
import Header from '../../components/Header'

import banner from '../../assets/images/italiana/camarao.png'
import bruschetta from '../../assets/images/italiana/bruschetta.png'
import nhoque from '../../assets/images/italiana/nhoque.png'
import lasanha from '../../assets/images/italiana/lasanha.png'
import risoto from '../../assets/images/italiana/risoto.png'
import cannoli from '../../assets/images/italiana/cannoli.png'
import tiramisu from '../../assets/images/italiana/tiramisu.png'
import Banner from '../../components/Banner'

const restaurantes: Food[] = [
  {
    id: 1,
    title: ['Bruschetta'],
    add: 'Adicionar ao carrinho',
    description:
      'A bruschetta é um antepasto italiano que também pode ser servido como aperitivo ou lanche. Feito à base de pão, geralmente é tostado em grelha com azeite e alho e tem muitas variações de recheio. ',
    image: bruschetta
  },
  {
    id: 2,
    title: ['Nhoque'],
    add: 'Adicionar ao carrinho',
    description:
      'O nhoque é feito a partir de batata ou macaxeira com farinha de trigo. Pode ser servido com diversos tipos de molho, de acordo com o seu gosto, sendo os mais tradicionais sugo, bolonhesa ou branco.',
    image: nhoque
  },
  {
    id: 3,
    title: ['Lasanha'],
    add: 'Adicionar ao carrinho',
    description:
      'A massa também é conhecida por outras grafias similares como lasagne e lasagna. A massa folheada é uma queridinha em todo o mundo.',
    image: lasanha
  },
  {
    id: 4,
    title: ['Risoto Carbonara'],
    add: 'Adicionar ao carrinho',
    description:
      'Risoto é um prato típico da culinária italiana e seu nome significa literalmente arrozinho. Rápido e prático, é conhecido por demorar apenas cerca de uma hora para ficar pronto.',
    image: risoto
  },
  {
    id: 5,
    title: ['Cannoli'],
    add: 'Adicionar ao carrinho',
    description:
      'Cannoli é uma sobremesa originária da Sicília. Consiste em massa doce frita em formato de tubinhos e recheada com o doce que você preferir.',
    image: cannoli
  },
  {
    id: 6,
    title: ['Tiramisu'],
    add: 'Adicionar ao carrinho',
    description:
      'Consiste em camadas de biscoitos de champagne, que também podem ser substituídos por pão de ló, embebidas em café.',
    image: tiramisu
  }
]

const Italiana = () => (
  <>
    <Header />
    <Banner title="La Dolce Vita Trattoria" image={banner} origen="Italiana" />
    <FoodsList foods={restaurantes} title="" />
  </>
)

export default Italiana
