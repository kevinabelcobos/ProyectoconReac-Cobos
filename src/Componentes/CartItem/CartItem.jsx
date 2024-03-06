import "./cartItem.css"
import { Button } from "react-bootstrap";

const CartItem = ({producto,eliminarItem}) => {

    return (
        <div className="itemCartProducto">
            <h3>{producto.producto.nombre}</h3>
            <img className="imgCart" src={producto.producto.img} alt={producto.producto.nombre}/>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Valor unitario: ${producto.producto.precio*producto.cantidad}</p>
            <Button style={{width:"200px"}} className="button btn btn-primary" onClick={()=> eliminarItem(producto.producto.id)}>Eliminar producto</Button>
        </div>
    );
};

export default CartItem;