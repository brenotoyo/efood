import { type Comida } from '../../pages/Home'
import Product from '../ProductH'
import { Container, List } from './styles'

export type Props = {
  comidas: Comida[]
}

const ProductListH = ({ comidas }: Props) => {
  const getComidaTags = (comida: Comida) => {
    const tags = []

    if (comida.destacado) {
      tags.push('Destaque da semana')
    }

    if (comida.tipo) {
      tags.push(comida.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {comidas.map(comida => (
            <Product
              id={comida.id}
              key={comida.id}
              title={comida.titulo}
              description={comida.descricao}
              image={comida.capa}
              infos={getComidaTags(comida)}
              nota={comida.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductListH
