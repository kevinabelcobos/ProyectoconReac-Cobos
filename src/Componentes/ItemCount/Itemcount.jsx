
import {useState} from 'react'
import "./ItemCount.css"
import PropTypes from "prop-types"

const Itemcount = ({stock}) => {

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

const AgregarCarrito = () =>{
    setContador(1)
}
    return (
    <div>
        <div className='contador'>
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        </div>
        <div className='addToCart'>
        <button onClick={AgregarCarrito}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

Itemcount.propTypes = {
    stock: PropTypes.number.isRequired
}


export default Itemcount
