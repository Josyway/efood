import hero from '../../assets/images/logo/hero.png'
import logo from '../../assets/images/logo/logo.png'
import { Title, Vector, Container } from './styles'

const Hero = () => (
  <Vector style={{ backgroundImage: `url(${hero})` }}>
    <Container>
      <img src={logo} alt="EFOOD" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Container>
  </Vector>
)

export default Hero
