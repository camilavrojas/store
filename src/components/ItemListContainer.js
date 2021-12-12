import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import ItemList from "./ItemList"
import {getProducts} from './products'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts() 

        list.then(item => {
            setProducts(item)
        })

        return(() => {
            setProducts([])
        })
    }, [])

    return (
        <div> 
            <ItemList products={products} />
        </div>
    )
}



export default ItemListContainer;