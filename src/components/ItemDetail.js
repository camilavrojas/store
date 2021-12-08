
const ItemDetail  = ({products}) => {
    return (
        <div className="DivItem"> 

            <div> 

                <h4 className="HItem">{products.name}</h4>

            </div>

            <img src={products.img} alt={products.name} className="ImgItem"/>

            <p className="PItem"> Precio: {products.price}</p>

            <button type="button" className="ButtonItem btn btn-dark">Ver detalle</button>

        </div>
    )
}




export default ItemDetail;