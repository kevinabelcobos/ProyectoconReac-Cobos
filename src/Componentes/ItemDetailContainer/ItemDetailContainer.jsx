import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { doc, getDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { bd } from "../../Firebase/firebase";

const ItemDetailContainer = () => {
  const [producto,setProducto] = useState(null)
  const [error,setError] = useState(null);
  const {id} = useParams()
  const handleClickError = () => {
    setError(null)
  }
  useEffect(()=>{
    const productRef = doc(bd,"CarritoGaucho",id)
    getDoc(productRef).then(snapshot=>{
      if(snapshot.exists()){
        setError(null)
        setProducto({id:snapshot.id,...snapshot.data()})
      }else{
        setError("Producto no encontrado")
      }
    })
  },[id])
  return (
    <>
    {error ? 
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1 className="text marginbottom">Error: {error}</h1>
          <Link className="buttonError" to={'/'} onClick={handleClickError} style={{textDecoration:'none'}}> 
          Ir a los productos
          </Link>
        </div> 
      : 
      <div className="itemDetailContainer">
      {producto === null ? <h1>Cargando el producto</h1> : <ItemDetail producto={producto}/>}
      </div>
    }
    </>
  )
}

export default ItemDetailContainer
