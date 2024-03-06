import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './Contex/CartContex'
import Cart from './Componentes/Cart/Cart'
import Checkout from './Componentes/Checkout/Checkout'


function App() {
  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element = {
                <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
            }/>
            <Route path='/item/:id' element = {
                <ItemDetailContainer/>
            }/>
            <Route path='/categoria/:nombreCategoria' element = {
                <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
            }/>
            <Route path='/checkout' element = {
                <Checkout/>
            }/>
            <Route path='/cart' element = {
                <Cart/>
            }/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
