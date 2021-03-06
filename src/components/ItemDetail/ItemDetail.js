import ItemCount from '../../components/ItemCount/ItemCount'; 
import '../../components/Styles/StyleComp.css';

const ItemDetail  = ({product}) => {
    const onAdd = () => { 
        console.log ("Agregado al Carrito")
    }

    return (

        <div>

            <div className="DivDetail"> 

            <div> 
            <img src={product?.img} alt={product?.name} className="ImgItemDetail"/> 
            </div>

            <div class="DivProducts card border-secondary mb-3">
            <div class="card-header">{product?.name}</div>
            <div class="card-body text-secondary">
                <p class="card-text">{product?.description}</p>
            </div>
            <table className="TableClass">
                <th className="ThClass">Otras caracteristicas:</th>
                <tr className="TrClass">Distancia focal del lente: {product?.distancia}</tr>
                <tr className="TrClass">Formato del rollo: {product?.rollo}</tr>
                <tr className="TrClass">Apertura máxima del lente: {product?.apertura}</tr>
                <tr className="TrClass">Con flash incorporado: {product?.flash}</tr>
            </table>
            </div>

            </div>
        </div>

    )
}




export default ItemDetail;