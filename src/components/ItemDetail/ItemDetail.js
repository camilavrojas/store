import React, { useContext, useState } from 'react';
import '../Styles/StyleComp.css'
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount'
import { CartContext } from '../../components/CartContext/CartContext'

const ItemDetail = ({product}) => {

    const {addItem} = useContext(CartContext)

    const [buy, setBuy] = useState(false);
    const [qty, setQty] = useState(0);

    const handleBuy = (qty) => {
        setBuy(true);
        setQty(qty);
    }

    const EnviarAlCarrito = () => {
        addItem(product, qty);

    }

    return (

        <div>

            <div className="DivDetail"> 

            <div> 
            <img src={product?.img} alt={product?.name} className="ImgItemDetail"/>
            {!buy ?
                <ItemCount stock = {10} onAdd = {(qty) => handleBuy (qty)} />
                :
                <button className="btnItem btn-light" onClick = {EnviarAlCarrito}> <Link to= "/cart"> Ir al carrito </Link></button>
                }
            </div>

            <div class="DivProducts card border-secondary mb-3">
            <div class="card-header">{product?.name}</div>
            <div class="card-body text-secondary">
                <p class="card-text">{product?.description}</p>
            </div>
            <table className="TableClass">
                <th className="ThClass">Otras caracteristicas:</th>
                <tr className="TrClass">Distancia focal del lente: {product?.distancia}</tr>
                <tr className="TrClass">Formato del rollo: {product?.rollo}</tr>
                <tr className="TrClass">Apertura máxima del lente: {product?.apertura}</tr>
                <tr className="TrClass">Con flash incorporado: {product?.flash}</tr>
            </table>
            </div>
            </div>
        </div>

    )
}




export default ItemDetail;