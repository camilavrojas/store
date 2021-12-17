import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList"
import {getProducts} from '../../components/Productos/products'
import { useParams } from 'react-router-dom'


const ItemListContainer = ()=> {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()


  useEffect(() => {
      

      getProducts(categoryId).then(item => {
          setProducts(item)
      }).catch(err  => {
          console.log(err)
      })

      return (() => {
          setProducts([])
      })

  }, [categoryId])

    return (
        <div className="ItemListContainer">
            <ItemList  products={products}/>
        </div>
    )    
    
}

export default ItemListContainer