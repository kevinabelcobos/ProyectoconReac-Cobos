import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
const CheckoutItem = ({product,quantity}) => {
  return (
<>
        <Card className="responsiveCard">
        <div className="d-md-flex">
            {/* Columna para la imagen */}
            <div className="flex-shrink-0">
            <Card.Img variant="top" src={product.img} alt={product.nombre} />
            </div>

            {/* Columna para el texto y botones */}
            <div className="flex-grow-1">
            <Card.Body className="descripcion" style={{textAlign:"center"}}>
                <Card.Title className="titulo">{product.nombre}</Card.Title>
                <Card.Text className="detalle">{product.descripcion}</Card.Text>
                <Card.Text className="precio">Total: ${product.precio}</Card.Text>
                <Card.Text className='quantityCart'>Unidades: {quantity}</Card.Text>
                <Card.Text className='subtotalCart'>Subtotal: ${product.precio * quantity}</Card.Text>
            </Card.Body>
            </div>
        </div>
        </Card>
    </>
  )
}


CheckoutItem.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CheckoutItem
