import React, {useState} from "react";
import '../Styles/StyleComp.css'

const ItemCount = ({ stock, onAdd}) => {

    const [count, setCount] = useState(1)
    const [ out,  setOut] = useState(false)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        else {
            setOut (true);
        }
    }

    const restar = () => {
        if (count === 1) {
            return
        } else {
            setCount(count - 1)
            setOut(false);
        }
    }

    return (

        <div className="Card" > 
            <div className="BotonContador"> 
                <button onClick = {sumar}  class="btn btn-primary btn-sm"> + </button>
                <button onClick = {restar} class="btn btn-secondary btn-sm"> - </button>
            </div>
            <div>
            {out && <span>Out of stock</span>}
            <button onClick={() => onAdd(count)}  className="btn btn-light"> Agregar al carrito: {count} </button>
            </div>
        </div>
    )
}

export default ItemCount