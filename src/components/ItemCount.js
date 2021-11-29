import React, {useState} from "react";
import '../CardStyle.css';
 

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
        <div className="Card" > 
            <span className="SpanContador">{contador}</span>
        <div className="BotonContador"> 
            <button onClick={sumarClick} className="BtnCss">+</button>
            <button onClick={restarClick} disabled={contador ===0} className="BtnCss">-</button>
        </div>
        <div>
            <button onClick={onAdd} type="button" class="btn btn-light">Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount