import logo from '../../assets/images/logo/logo.png'
import instagram from '../../assets/images/logo/instagram.png'
import facebook from '../../assets/images/logo/facebook.png'
import twiterr from '../../assets/images/logo/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <S.FooterSection>
        <S.Links>
          <li>
            <S.Link>
              <img src={instagram} alt="Instagram" />
            </S.Link>
          </li>
          <li>
            <S.Link>
              <img src={facebook} alt="Facebook" />
            </S.Link>
          </li>
          <li>
            <S.Link>
              <img src={twiterr} alt="Twiterr" />
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.SectionInfo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.SectionInfo>
    </div>
  </S.Container>
)

export default Footer
