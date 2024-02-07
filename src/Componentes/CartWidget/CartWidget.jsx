import "./CartWidget.css"
import cartIcon from "/img/cart.svg"

const CartWidget = () => {
  return (
    <>
    <div className="carrito">
      <img src={cartIcon} alt="carrito de compras" />
      <p>0</p>
    </div>
    </>
  )
}

export default CartWidget
