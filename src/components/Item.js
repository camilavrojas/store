import './StyleComp.css';

const Item = ({product}) => {

    return (
        <div className="DivItem"> 

            <div> 

                <h4 className="HItem">{product.name}</h4>

            </div>

            <img src={product.img} alt={product.name} className="ImgItem"/>

            <p className="PItem"> Precio: {product.price}</p>

            <button type="button" className="ButtonItem btn btn-dark">Ver detalle</button>

        </div>
        
    )
}

export default Item;