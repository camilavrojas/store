import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {getProductById} from '../../components/Productos/products';
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';




const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [button, setButton] = useState(true);
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

    const onAdd = () => {
        console.log('Agregado al carrito:');
        setButton(false);
      }; 
      console.log(button);


    return (
        <div> 
            <ItemDetail product={product} />
            {button ? 
            ( <ItemCount onAdd={onAdd} /> ) : 
            (<button to={'/cart'} className="btn btn-dark">Ir al carrito de compras</button> )}
        </div>
    )

}









export default ItemDetailContainer;