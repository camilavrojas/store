import {InputCount} from './ItemCount'
import {ButtonCount} from './ItemCount'
import './StyleComp.css';


const ItemDetail = ({ product, inputType = 'input' }) => {

    const Count = inputType === 'input' ? ButtonCount : InputCount 

    const addToCart = (count) => { 
        console.log(`Agregado al carrito ${count}`)
    }

    return (

        <div>

            <div className="DivDetail"> 

            <div> 
            <img src={product?.img} alt={product?.name} className="ImgItemDetail"/>
            <Count onConfirm={addToCart} maxQuantity={product?.stock}/>
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