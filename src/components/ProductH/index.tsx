import Tag from '../Tag'
import {
  Card,
  Infos,
  Titulo,
  Destaque,
  Descricao,
  TagWrapper,
  NotaContainer,
} from './styles'
import estrela from '../../assets/estrela.png'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  nota: number
  id: number
}

const Product = ({ title, description, image, infos, nota, id }: Props) => {
  return (
    <Card to={`/perfil/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map(info => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Destaque>
        <Titulo>{title}</Titulo>
        <NotaContainer>
          <Titulo>{nota}</Titulo>
          <img src={estrela} alt="Estrela" />
        </NotaContainer>
      </Destaque>
      <Descricao>{description}</Descricao>
      <TagWrapper>
        <Tag href={`/perfil/${id}`}>Saiba mais</Tag>
      </TagWrapper>
    </Card>
  )
}

export default Product
