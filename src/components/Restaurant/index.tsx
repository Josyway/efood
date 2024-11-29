import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/images/logo/star.png'

import { Post, Descricao, Note, Infos, Titulo, Info } from './styles'

type Props = {
  id: number
  title: string[]
  type: string
  assessment: string
  description: string
  cover: string
}

const Restaurant = ({
  id,
  title,
  type,
  assessment,
  description,
  cover
}: Props) => (
  <Post to={`/profile/${id}`}>
    <img src={cover} />
    <Info>
      <Infos>
        {title.map((info) => (
          <Tag key={info}>{type}</Tag>
        ))}
      </Infos>
      <Note>
        <Titulo>{title}</Titulo>
        <div>
          <Titulo>{assessment}</Titulo>
          <img src={star} />
        </div>
      </Note>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to={`/profile/${id}`}
        title="Clique e conheça o restaurante"
      >
        Saiba Mais
      </Button>
    </Info>
  </Post>
)

export default Restaurant
