import Comida from '../../models/Comida'
import Product from '../ProductH'
import { Container, List } from './styles'

export type Props = {
  comidas: Comida[]
}

const ProductListH = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map(comida => (
          <Product
            key={comida.id}
            title={comida.title}
            description={comida.description}
            image={comida.image}
            infos={comida.infos}
            nota={comida.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListH
