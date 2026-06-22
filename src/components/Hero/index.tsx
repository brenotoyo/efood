import logo from '../../assets/logo.png'
import { Descricao, HeroContainer, Logo } from './styles'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <Logo src={logo} alt="Logo" />
      <Descricao>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Descricao>
    </div>
  </HeroContainer>
)

export default Hero
