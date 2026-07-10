import { useDispatch, useSelector } from 'react-redux'

import { close, remove, openCheck } from '../../store/reducers/Cart'
import type { RootReducer } from '../../store'
import Tag from '../Tag'
import { CartContainer, CartItem, Overlay, Sidebar, Total } from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const parseToBrl = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco!
    }, 0)
  }

  const openCheckout = () => {
    closeCart()
    dispatch(openCheck())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map(item => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                </CartItem>
              ))}
            </ul>
            <Total>
              <p>Valor total:</p>
              <p>{parseToBrl(getTotalPrice())}</p>
            </Total>
            <Tag fullWidth onClick={openCheckout}>
              Continuar com a entrega
            </Tag>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos 1 produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
