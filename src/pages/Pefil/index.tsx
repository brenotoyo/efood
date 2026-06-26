import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import HeroP from '../../components/HeroP'
import ProductListP from '../../components/ProductListP'
import { useGetComidasQuery } from '../../services/Api'

const Perfil = () => {
  const { id } = useParams()

  const { data: comida } = useGetComidasQuery(id!)

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
