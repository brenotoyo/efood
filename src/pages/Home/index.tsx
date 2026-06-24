import Hero from '../../components/Hero'
import ProductListH from '../../components/ProductListH'

import { useEffect, useState } from 'react'

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
  const [cardapio, setCardapio] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setCardapio(res))
      .catch(err => console.error('Erro ao buscar restaurantes:', err))
  }, [])

  return (
    <>
      <Hero />
      <ProductListH comidas={cardapio} />
    </>
  )
}
export default Home
