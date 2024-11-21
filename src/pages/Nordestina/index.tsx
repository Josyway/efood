import Food from '../../models/Food'

import Header from '../../components/Header'
import FoodsList from '../../components/FoodsList'

import banner from '../../assets/images/nordestina/tapiocacard.png'
import baiao from '../../assets/images/nordestina/baiao.png'
import cuscuz from '../../assets/images/nordestina/cuscuz.png'
import paçoca from '../../assets/images/nordestina/paçoca.png'
import tapioca from '../../assets/images/nordestina/tapioca.png'
import carne_sol from '../../assets/images/nordestina/carne_sol.png'
import escondidinho from '../../assets/images/nordestina/escondidinho.png'
import Banner from '../../components/Banner'

const restaurantes: Food[] = [
  {
    id: 1,
    title: ['Baião de dois'],
    add: 'Adicionar ao carrinho',
    description:
      'O baião de dois é um prato feito de arroz, feijão, carne seca e queijo coalho. Há quem diga que a origem do nome é pela dança típica nordestina, o baião.',
    image: baiao
  },
  {
    id: 2,
    title: ['Cuscuz'],
    add: 'Adicionar ao carrinho',
    description:
      'O cuscuz é um prato de origem africana que é muito consumido no nordeste e na região norte do país. Ele pode ser feito à base de farinha ou polvilho, milho, arroz ou mandioca.',
    image: cuscuz
  },
  {
    id: 3,
    title: ['Paçoca de carne'],
    add: 'Adicionar ao carrinho',
    description:
      'A paçoca de carne é feita com farinha de mandioca, cebola e carne seca moída. Pode ser consumida junto com o baião de dois.',
    image: paçoca
  },
  {
    id: 4,
    title: ['Carne de sol'],
    add: 'Adicionar ao carrinho',
    description:
      'A carne de sol é muito típica do nordeste brasileiro, e também é chamada de carne de vento e carne do sertão. Apesar do nome, não há exposição aos raios solares.',
    image: carne_sol
  },
  {
    id: 5,
    title: ['Tapioca'],
    add: 'Adicionar ao carrinho',
    description:
      'Ela pode ser consumida com ou sem manteiga, com coco e também com outros recheios como frango, queijo e atum.',
    image: tapioca
  },
  {
    id: 6,
    title: ['Escondidinho de Carne-Seca'],
    add: 'Adicionar ao carrinho',
    description:
      'Essa delícia é recheada com carne-seca ao molho vermelho e vem coberta por uma camada de purê de macaxeira (também conhecida como mandioca) e muçarela.',
    image: escondidinho
  }
]

const Nordestina = () => (
  <>
    <Header />
    <Banner title="Delicia Nordestina" image={banner} origen="Nordestina" />
    <FoodsList foods={restaurantes} title="" />
  </>
)

export default Nordestina
