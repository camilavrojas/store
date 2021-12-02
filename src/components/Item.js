const Item = ({product}) => {

    return (
        <div> 

            <div> 

                <h3>{product.name}</h3>

            </div>

            <img src={product.img} alt={product.name} />

            <p> Precio: {product.price} </p>

            <button>Ver detalle</button>

        </div>
    )
}

export default Item;