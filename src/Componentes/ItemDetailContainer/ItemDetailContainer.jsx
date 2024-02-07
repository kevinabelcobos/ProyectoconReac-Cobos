import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [producto,setProducto] = useState(null)
  const {id} = useParams()
  useEffect(()=>{
    const fetchData = async () =>{
        try{
            const response = await fetch("/productos.json")
            const data = await response.json()
            const producto = data.find(p=>p.id == id)
            setProducto(producto)
        }catch(e){
            console.log(e)
        }
    }
    fetchData()
  },[id])
  return (
    <div>
      {producto === null ? <h1>Cargando el producto</h1> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
