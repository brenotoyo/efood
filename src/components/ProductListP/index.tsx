import type Pizza from '../../models/Pizza'
import Product from '../ProductP'
import { Container, List } from './styles'

export type Props = {
  pizzas: Pizza[]
}

const ProductListP = ({ pizzas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pizzas.map(pizza => (
          <Product
            key={pizza.id}
            title={pizza.title}
            image={pizza.image}
            description={pizza.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListP
