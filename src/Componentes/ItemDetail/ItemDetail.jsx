import { Card } from "react-bootstrap";
import PropTypes from "prop-types"
import ItemCount from "../ItemCount/Itemcount"
import "./ItemDetail.css"
import { CartContext } from "../../Contex/CartContex";
import { useContext } from "react";

const ItemDetail = ({producto}) => {
  const {agregarCarrito} = useContext(CartContext)
  const agregarAlCarritoCount = (contador) =>{
    agregarCarrito(producto,contador)
  }
  return (
    <Card className="itemDetail">
        <div className="d-md-flex">
        {/* Columna para la imagen */}
        <div className="flex-shrink-0">
            <Card.Img variant="top" className="imgDetail" src={producto.img} alt={producto.nombre} />
        </div>

        {/* Columna para el texto y botones */}
        <div className="flex-grow-1">
            <Card.Body className="descripcion">
            <Card.Title className="titulo">{producto.nombre}</Card.Title>
            <Card.Text className="detalle">{producto.description}</Card.Text>
            <Card.Text className="precio">Stock: {producto.stock}</Card.Text>
            <Card.Text className="precio">${producto.precio}</Card.Text>
            <ItemCount stock={producto.stock} agregarAlCarritoCount={agregarAlCarritoCount}/>
            </Card.Body>
        </div>
        </div>
    </Card>
  )
}

ItemDetail.propTypes = {
  producto: PropTypes.object.isRequired

}

export default ItemDetail
