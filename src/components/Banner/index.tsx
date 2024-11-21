import { Imagem, Titulo, Origin, Presentation } from './styles'

export type Props = {
  title: string
  image: string
  origen: string
}

const Banner = ({ title, image, origen }: Props) => (
  <Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <Presentation>
        <Origin>{origen}</Origin>
        <Titulo>{title}</Titulo>
      </Presentation>
    </div>
  </Imagem>
)

export default Banner
