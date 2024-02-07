import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
function App() {
  

  return (
    <>

      <BrowserRouter>
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
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
