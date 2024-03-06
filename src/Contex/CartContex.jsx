import {useState,createContext} from "react";
import PropTypes from "prop-types"

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const agregarCarrito = (producto,cantidad) => {
       const productoExistente = cart.find(prod => prod.producto.id == producto.id)
       if(!productoExistente){
        const newCart = [...cart]
        newCart.push({producto,cantidad})
        setCart(newCart)
       }else{
        productoExistente.cantidad += cantidad
       }
    }
    
    const eliminarItem = (productoId) => {
        const newCart = cart.filter(item => item.producto.id !== productoId)
        setCart(newCart)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const cantidadCarrito = () => {
        const totalQuantity = cart.reduce((total,item)=> total+item.cantidad,0)
        return totalQuantity 
    }

    const totalCarrito = () => {
        const totalPrice = cart.reduce((total,item) => total + (item.producto.precio * item.cantidad),0)
        return totalPrice
    }
 
    return(
        <CartContext.Provider value={{
            cart,
            agregarCarrito,
            eliminarItem,
            vaciarCarrito,
            cantidadCarrito,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export default CartProvider



