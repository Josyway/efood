import hero from '../../assets/images/logo/hero.png'
import logo from '../../assets/images/logo/logo.png'

import * as S from './styles'

const Hero = () => (
  <S.Vector style={{ backgroundImage: `url(${hero})` }}>
    <S.Container>
      <img src={logo} alt="EFOOD" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.Container>
  </S.Vector>
)

export default Hero
