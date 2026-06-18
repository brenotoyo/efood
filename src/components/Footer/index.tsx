import { Container, Descricao, Redes } from './styles'
import logo from '../../assets/logo.png'
import twitter from '../../assets//twitter.png'
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="Logo" />
      <Redes>
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </Redes>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
      </Descricao>
      <Descricao>dos produtos é toda do estabelecimento contratado.</Descricao>
    </div>
  </Container>
)

export default Footer
