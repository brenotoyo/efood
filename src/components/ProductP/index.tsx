import Tag from '../Tag'
import { Card, Descricao, TagWrapper, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ description, image, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>Pizza Marguerita</Titulo>
    <Descricao>{description}</Descricao>
    <TagWrapper>
      <Tag>Adicionar ao carrinho</Tag>
    </TagWrapper>
  </Card>
)

export default Product
