import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {getProductById} from '../../components/Productos/products';
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {paramId} = useParams()
    console.log(paramId)

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        })

        return(() => {
            setProduct()
        })
    }, [paramId])


    return (
        <div> 
            <ItemDetail product={product} />
        </div>
    )

}









export default ItemDetailContainer;