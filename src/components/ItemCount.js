import React, {useState} from "react";

const ItemCount = ({onAdd}) => {


    const [contador, setContador] = useState(1);

    const sumarClick = () => {
        if (contador <5 ) {
        setContador (contador +1)
        } 
    }

    const restarClick = () => {
        if (contador <6 ) {
        setContador (contador -1) 
        }
    }
 


    return (
        <div className="itemCount"> 
            <button onClick={sumarClick}>+</button>
            <span>{contador}</span>
            <button onClick={restarClick} disabled={contador ===0} >-</button>
        <div>
            <button onClick={onAdd}> Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount