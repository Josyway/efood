import Button from '../Button'
import Tag from '../Tag'
import { Post, Descricao, Note, Infos, Titulo, Info } from './styles'

type Props = {
  title: string
  category: string
  star: string
  description: string
  infos: string[]
  image: string
  plus: string
}

const Restaurant = ({
  title,
  category,
  description,
  infos,
  image,
  star,
  plus
}: Props) => (
  <Post>
    <img src={image} />
    <Info>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Note>
        <Titulo>{title}</Titulo>
        <div>
          <Titulo>{category}</Titulo>
          <img src={star} />
        </div>
      </Note>
      <Descricao>{description}</Descricao>
      <Button type="link" to={plus} title="Clique e conheça o restaurante">
        Saiba Mais
      </Button>
    </Info>
  </Post>
)

export default Restaurant
