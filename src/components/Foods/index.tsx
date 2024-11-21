import Button from '../Button'
import { Card, Descricao, Title, Image } from './styled'

type Props = {
  title: string[]
  description: string
  image: string
  add: string
}

const Foods = ({ title, description, image, add }: Props) => (
  <>
    <Card>
      <Image src={image} />
      {title.map((title) => (
        <Title key={title}>{title}</Title>
      ))}
      <Descricao>{description}</Descricao>
      <Button type="link" to="/" title="Lista de restaurantes">
        {add}
      </Button>
    </Card>
  </>
)

export default Foods
