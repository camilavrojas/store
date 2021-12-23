import React from 'react';
import '../Cart/CartStyle.css'
import { useContext } from 'react';
import { CartContext } from '../../components/CartContext/CartContext';

const Cart = () => {

    const {cart} = useContext (CartContext);

    return (
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Producto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
            {cart.map(producto => {
                        return <tr className='tabla'>
                            <td> {producto.item.name}</td>
                            <td> {producto.item.description} </td>
                            <td> {producto.cantidad} </td>
                            <td> {producto.item.price} </td>
                        </tr>
            })}
            </tbody>
        </table>
    )
}

export default Cart;