import PropTypes from "prop-types"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="containerProducts">
     <div className="contenedorProductos">
    {productos.length == 0 ? <h1>hola</h1> : productos.map(producto =>{
            return(
                <Item key={producto.id} producto = {producto}/>
            )
        })}
    </div>
    </div>
  )
}

ItemList.propTypes = {
    productos: PropTypes.array.isRequired
}

export default ItemList
