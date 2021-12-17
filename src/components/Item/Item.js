import '../../components/Styles/StyleComp.css';
import {Link} from 'react-router-dom'

const Item = ({product}) => {

    return (
        <article className="DivItem"> 

            <header> 

                <h4 className="HItem">{product.name}</h4>

            </header>
            <picture>

                <img src={product.img} alt={product.name} className="ImgItem"/>
     
            </picture>

            <p className="PItem"> Precio: {product.price}</p>

            <Link className="ButtonItem btn btn-dark" to={`/detail/${product.id}`}>Ver detalle</Link>

        </article>
        
    )
}

export default Item;