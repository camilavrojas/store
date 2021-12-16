import React, {useState} from "react";
import './StyleComp.css';
import {Link} from 'react-router-dom' 


export const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <input onClick={() => onConfirm(count)}>Agregar al carrito</input>
        </div>
    )
}

export const ButtonCount = ({ onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (

        <div className="Card" > 
            <div className="BotonContador"> 
                <button onClick={sumar}  class="btn btn-primary btn-sm"> + </button>
                <button onClick={restar}  class="btn btn-secondary btn-sm"> - </button>
            </div>
            <div>
                <button onClick={() => onConfirm(count)} className="btn btn-light">Agregar al carrito: {count} </button>
            </div>
            <div>
                <Link to={'/cart/'} className="btn btn-light">Ir al carrito</Link>
            </div>
        </div>
    )
}