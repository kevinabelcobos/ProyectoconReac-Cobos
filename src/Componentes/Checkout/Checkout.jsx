import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useContext} from "react";
import { CartContext } from "../../Contex/CartContex";
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { bd } from "../../Firebase/firebase";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {
    const [order,setOrder] = useState(null);
    const {cart,totalCarrito,vaciarCarrito} = useContext(CartContext)
    const Modal = withReactContent(Swal);
    const handleAceptarClick = () => {
        Modal.fire({
          title: "Error",
          text: error,
          icon: "error",
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        })
        setError(null);
      };
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        lastName: '',
        emailConfirmation: ''
      });
    const [error,setError] = useState(null)
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        const exp = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
        if(formData.email != formData.emailConfirmation){
          setError('Los emails no coinciden')
        }else if(formData.phone.length < 10){
          setError('El numero de telefono debe tener al menos 10 caracteres')
        }else if(isNaN(formData.phone)){
          setError('El telefono debe ser un numero')
        }else if(!exp.test(formData.name) || !exp.test(formData.lastName)){
          setError('Tu nombre no puede contener numeros')
        }else{
          setError(null)
        const buyer = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            lastName: formData.lastName,
            date: new Date().toLocaleString()
        }
        const items = []
        cart.forEach(async(product)=>{
          const productRef = doc(bd,'CarritoGaucho',product.producto.id)
          const stock = product.producto.stock
          const newStock = stock - product.cantidad
          const productSnapshot = await getDoc(productRef)
          if(productSnapshot.exists()){
            await updateDoc(productRef, {
              stock: newStock
          });
          }
        })
        cart.forEach((product)=>{
            items.push({
                id: product.producto.id,
                title: product.producto.nombre,
                price: product.producto.precio,
                quantity: product.cantidad
            })
        })
        const order = {buyer,items}
        const orderCollections = collection(bd,"orders")
        const orderBD = await addDoc(orderCollections,order)
        setOrder(orderBD.id)
        vaciarCarrito()
        }
      };
  return (
    <>
    {order ? 
    <div className="contenedor_general" style={{textAlign:'center'}}><h1 className="totalCarritoCart">Tu compra ha sido completada con exito,tu comprobante: {order}</h1></div> :
    cart.length == 0 ?
     <div className="contenedor_general" style={{textAlign:'center'}}><h1 className="totalCarritoCart">El carrito se encuentra vacio, no puedes finalizar tu compra!</h1></div>  : 
     <div className="contenedor_general" style={{textAlign:'center'}}>
        <h1 className="totalCarritoCart">Para finalizar tu compra,debes completar el siguiente formulario!</h1>
      <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="name" style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="lastName" style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="phone" style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingresa tu teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                onKeyPress={(event) => {
                  if (!/\d/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email" style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="emailConfirmation" style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Confirma tu correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="emailConfirmation"
                value={formData.emailConfirmation}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn button btn-primary" style={{marginTop: '16px',background:'#d12b3e', border:'none', marginBottom:'16px'}}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <h1 className="totalCarritoCart">Resumen de tu compra</h1>
    <h1 className="totalCarritoCart">TotalCarrito de tu carrito: ${totalCarrito()}</h1>
    <div className="cartContainer">
    {cart.map(p=>{
        return  <CheckoutItem key={p.producto.id} product={p.producto} quantity = {p.cantidad}/>
    })
    } 
    {error &&  
        handleAceptarClick()
    }
    </div>
    </div>
    }
    </>
  )
}

export default Checkout
