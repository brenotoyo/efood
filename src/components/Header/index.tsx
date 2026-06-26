import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/Cart'
import { CartButton, Container } from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Container>
      <div className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </Container>
  )
}

export default Header
