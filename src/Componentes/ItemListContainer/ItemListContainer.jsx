import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { bd } from "../../Firebase/firebase";
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos,setProductos] = useState([]);
  const {nombreCategoria} = useParams();
  const [error,setError] = useState(null)
  const handleClickError = () => {
    setError(null)
  }
  useEffect(()=>{
    const productRef = query(collection(bd, "CarritoGaucho"));
    if(!nombreCategoria){
      getDocs(productRef).then(
        (snapshot) => {
          if(!snapshot.empty){
            const productsData = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
            setProductos(productsData)
            setError(null)
          }else{
            setError("No se pudieron traer los productos,intente nuevamente")
          }
        }
      ) 
    }
      else{
        const productsFiltered = query(collection(bd, "CarritoGaucho"),where("categoria","==",nombreCategoria));
        getDocs(productsFiltered).then(snapshot=>{
          const productsFiltered = snapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
          if(productsFiltered.length > 0){
            setProductos(productsFiltered)
            setError(null)
          }else{
              setError("No se pudieron traer los productos,intente nuevamente")
            }
        })
      }
  },[nombreCategoria])


  return (
    <>
    {error ?  
    
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 className="text marginbottom">Error: {error}</h1>
        <Link className="buttonError" style={{textDecoration:'none'}} to={'/'} onClick={handleClickError}> 
          Ir a los productos
        </Link>
      </div> 
    : 
      <>
      <div className='greeting'><p>{greeting}</p></div>
      <ItemList productos={productos}/>
      </>
    }
    </>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
