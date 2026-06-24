import type { Comida } from '../../pages/Home'
import { Container, Nome, Titulo } from './styles'

type Props = {
  comida: Comida
}

const HeroP = ({ comida }: Props) => (
  <Container style={{ backgroundImage: `url(${comida.capa})` }}>
    <div className="container">
      <Titulo>{comida.tipo}</Titulo>
      <Nome>{comida.titulo}</Nome>
    </div>
  </Container>
)

export default HeroP
