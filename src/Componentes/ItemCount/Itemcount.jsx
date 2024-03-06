
import {useState} from 'react'
import "./ItemCount.css"
import PropTypes from "prop-types"

const Itemcount = ({stock,agregarAlCarritoCount}) => {

const agregarAlCarrito = () =>{
    agregarAlCarritoCount(contador)
    reset()
}

const [contador,setContador] = useState(1);

const restar = () => {
    if (contador > 1) {
        setContador(contador - 1)
    }
}

const sumar = () => {
    if (contador < stock){
        setContador(contador + 1)
    }
}

const reset = () =>{
    setContador(1)
} 
    return (
    <div>
        <div className='contador'>
        <button className='buttonSumRest' onClick={restar}>-</button>
        <p>{contador}</p>
        <button className='buttonSumRest' onClick={sumar}>+</button>
        </div>
        <div className='addToCart'>
        <button className='botonAddCart' onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

Itemcount.propTypes = {
    stock: PropTypes.number.isRequired,
    agregarAlCarritoCount: PropTypes.func.isRequired
}


export default Itemcount
