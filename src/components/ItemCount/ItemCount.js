import React, {useState} from "react";
import '../../components/Styles/StyleComp.css';
 

const ItemCount = ({onAdd}) => {



    const [contador, setContador] = useState(0);

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
            <div className="BotonContador"> 
                <button onClick={sumarClick}  type="button" class="btn btn-primary btn-sm"> + </button>
                <button onClick={restarClick} type="button" class="btn btn-secondary btn-sm"> - </button>
            </div>
            <div>
                <button onClick={onAdd} className="btn btn-light">Agregar al carrito: {contador}</button>
            </div>
        </div>
    )
}



export default ItemCount