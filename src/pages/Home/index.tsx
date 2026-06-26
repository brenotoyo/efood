import { useGetRestaurantesQuery } from '../../services/Api'
import Hero from '../../components/Hero'
import ProductListH from '../../components/ProductListH'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Comida = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Hero />
        <ProductListH comidas={restaurantes} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home
