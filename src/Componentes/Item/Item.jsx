import { Card, Button } from "react-bootstrap"
import PropTypes from "prop-types"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
       <Card className="card">
      <Card.Img className="imgProduct" variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title className="title">{producto.nombre}</Card.Title>
        <Link to={`/item/${producto.id}`}>
          <Button className="button" variant="primary">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

Item.propTypes = {
    producto: PropTypes.object.isRequired
}

export default Item
