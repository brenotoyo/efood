import Hero from '../../components/Hero'
import ProductListH from '../../components/ProductListH'
import type Comida from '../../models/Comida'

import sushi from '../../assets/sushi.png'
import macarrao from '../../assets/macarrao.png'

const itens: Comida[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['destaque da semana', 'japonesa'],
    nota: 4.9,
    title: 'Hioki Sushi',
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['italiana'],
    nota: 4.6,
    title: 'La Dolce Vita Trattoria',
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['italiana'],
    nota: 4.6,
    title: 'La Dolce Vita Trattoria',
  },
  {
    id: 4,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['destaque da semana', 'japonesa'],
    nota: 4.9,
    title: 'Hioki Sushi',
  },
  {
    id: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['destaque da semana', 'japonesa'],
    nota: 4.9,
    title: 'Hioki Sushi',
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['italiana'],
    nota: 4.6,
    title: 'La Dolce Vita Trattoria',
  },
]

const Home = () => (
  <>
    <Hero />
    <ProductListH comidas={itens} />
  </>
)
export default Home
