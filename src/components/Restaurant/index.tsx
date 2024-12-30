import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/images/logo/star.png'

import * as S from './styles'

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
  <S.Post to={`/profile/${id}`}>
    <img src={cover} />
    <S.Info>
      <S.Infos>
        {title.map((info) => (
          <Tag key={info}>{type}</Tag>
        ))}
      </S.Infos>
      <S.Note>
        <S.Title>{title}</S.Title>
        <div>
          <S.Title>{assessment}</S.Title>
          <img src={star} />
        </div>
      </S.Note>
      <S.Description>{description}</S.Description>
      <Button
        type="link"
        to={`/profile/${id}`}
        title="Clique e conheça o restaurante"
      >
        Saiba Mais
      </Button>
    </S.Info>
  </S.Post>
)

export default Restaurant
