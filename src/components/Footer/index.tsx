import { Container, FooterSection, Link, Links, SectionInfo } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twiterr from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <FooterSection>
        <Links>
          <li>
            <Link>
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twiterr} alt="Twiterr" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <SectionInfo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </SectionInfo>
    </div>
  </Container>
)

export default Footer
