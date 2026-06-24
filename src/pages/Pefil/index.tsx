import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { Comida } from '../Home'
import Header from '../../components/Header'
import HeroP from '../../components/HeroP'
import ProductListP from '../../components/ProductListP'

const Perfil = () => {
  const { id } = useParams()

  const [comida, setComida] = useState<Comida>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => res.json())
      .then(res => setComida(res))
  }, [id])

  if (!comida) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <HeroP comida={comida} />
      <ProductListP cardapio={comida.cardapio} />
    </>
  )
}

export default Perfil
