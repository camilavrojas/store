import './StyleComp.css';
import {Link} from 'react-router-dom'

const Item = ({product}) => {

    return (
        <div className="DivItem"> 

            <div> 

                <h4 className="HItem">{product.name}</h4>

            </div>

            <img src={product.img} alt={product.name} className="ImgItem"/>

            <p className="PItem"> Precio: {product.price}</p>

            <Link to={`/detail/${product.id}` } type="button" className="ButtonItem btn btn-dark">Ver detalle</Link>

        </div>
        
    )
}

export default Item;