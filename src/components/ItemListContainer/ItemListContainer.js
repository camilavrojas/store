import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import ItemList from "../../components/ItemList/ItemList"
import {getProducts} from '../../components/Productos/products'
import {getCategories} from '../../components/Productos/products'
import { useParams } from 'react-router-dom'


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        (async () => {
          if (categoryId !== undefined) {
            const products = await getCategories(categoryId);
            setProducts(products);
          } else {
            const products = await getProducts();
            setProducts(products);
          }
        })();
      }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <ItemList  products={products}/>
        </div>
    )    
    
}

export default ItemListContainer
