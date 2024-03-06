import {useContext} from 'react';
import { CartContext } from '../../Contex/CartContex';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import "./Cart.css"
import { Button } from 'react-bootstrap';

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)

    return (
        <div>
            {cart.length == 0 
            ? 
            <>
            <div className='totalCart'>
            <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
            <Link to={"/"}>IR AL INICIO</Link>
            </div>
            </>
                
                :

                <>
                <h1 style={{textAlign:"center"}}>lista de carrito</h1>
                <div className='cartItem' >
                    {cart.map((p,index)=>(
                        <div key={index}>
                        <CartItem producto={p} eliminarItem={eliminarItem}/>
                        </div>
                    ))}
                </div>
                

                <div className='totalCart'>
                    <p>Total: ${totalCarrito()}</p>
                    <Link to={"/checkout"}>Finalizar compra</Link>
                    <Button style={{width:"200px"}} className='button btn btn-primary' onClick={vaciarCarrito}>Vaciar carrito</Button>
                </div>


                </>

                

            } 
        </div>
    );
};

export default Cart;