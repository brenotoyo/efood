import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { add, open } from '../../store/reducers/Cart'
import Product from '../ProductP'
import {
  Container,
  List,
  Modal,
  ModalContent,
  ModalInfos,
  Overlay,
  Textos,
} from './styles'

import fechar from '../../assets/close 1.png'
import Tag from '../Tag'

type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  cardapio: Prato[]
}

interface ModalState extends Prato {
  isVisible: boolean
}

const ProductListP = ({ cardapio }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    id: 0,
    nome: '',
    foto: '',
    descricao: '',
    preco: 0,
    porcao: '',
  })

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(modal))
    dispatch(open())
    fecharModal()
  }

  const abrirModal = (prato: Prato) => {
    setModal({ isVisible: true, ...prato })
  }

  const fecharModal = () => {
    setModal(prev => ({ ...prev, isVisible: false }))
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {cardapio.map(prato => (
              <Product
                key={prato.id}
                title={prato.nome}
                image={prato.foto}
                description={prato.descricao}
                onClick={() => abrirModal(prato)}
              />
            ))}
          </List>
        </div>
        <div></div>
      </Container>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <img src={fechar} alt="Fechar modal" onClick={fecharModal} />
          <ModalInfos>
            <img src={modal.foto} alt={modal.nome} />
            <Textos>
              <h2>{modal.nome}</h2>
              <p>{modal.descricao}</p>
              <p>Serve: {modal.porcao}</p>
              <Tag fullWidth onClick={addToCart}>
                Adicionar ao carrinho -{' '}
                {modal.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Tag>
            </Textos>
          </ModalInfos>
        </ModalContent>
        <Overlay onClick={fecharModal} className="overlay" />
      </Modal>
    </>
  )
}

export default ProductListP
