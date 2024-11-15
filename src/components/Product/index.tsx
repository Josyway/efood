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

const Product = ({
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
      <Tag>{plus}</Tag>
    </Info>
  </Post>
)

export default Product
