import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

import { store } from './store'
import { GlobalCss } from './styles'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
