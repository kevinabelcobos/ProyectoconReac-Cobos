import "./CartWidget.css"
import cartIcon from "/img/cart.svg"
import { useContext } from "react"
import {CartContext} from "../../Contex/CartContex"


const CartWidget = () => {
  
  const {cantidadCarrito} = useContext(CartContext)
  return (
    <>
    <div className="carrito">
      <img src={cartIcon} alt="carrito de compras" />
      <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
    </div>
    </>
  )
}

export default CartWidget
