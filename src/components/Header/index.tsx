import { Container } from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <Container>
    <div className="container">
      <h3>Restaurantes</h3>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h3>
        <span>0</span> produto(s) no carrinho
      </h3>
    </div>
  </Container>
)

export default Header
