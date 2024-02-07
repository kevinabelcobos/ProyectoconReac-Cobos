import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [productos,setProductos] = useState([]);
  const {nombreCategoria} = useParams();
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const productsJSON = await fetch("/productos.json")
        const productos = await productsJSON.json()
        if(nombreCategoria == undefined){
          setProductos(productos)
        }else{
          const productosFiltrados = productos.filter(p=>p.categoria.nombre === nombreCategoria)
          setProductos(productosFiltrados)
        }
      }catch(e){
        console.log(e)
      }
    }

    fetchData()
  },[nombreCategoria])


  return (
    <>
        <div className='greeting'><p>{greeting}</p></div>
        {productos.length === 0 ? <h1>Cargando los productos</h1>: <ItemList productos={productos}/>}
    </>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
