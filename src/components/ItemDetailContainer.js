import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {getItem} from './products'



const ItemDetailContainer = () => {

    const [products, setItem] = useState([])

    useEffect(() => {
        const list = getItem() 
        list.then(list => {
            setItem(list)
        })

        return(() => {
            setItem([])
        })
    }, [])






    return (
        <div> 
            <ItemDetail products={products} />

        </div>
    )

}









export default ItemDetailContainer;