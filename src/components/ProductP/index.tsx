import Tag from '../Tag'
import { Card, Descricao, TagWrapper, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Product = ({ description, image, title, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card onClick={onClick}>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{getDescricao(description)}</Descricao>
      <TagWrapper>
        <Tag fullWidth>Mais detalhes</Tag>
      </TagWrapper>
    </Card>
  )
}

export default Product
