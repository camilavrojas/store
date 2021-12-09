import ItemCount from './ItemCount'; 
import './StyleComp.css';

const ItemDetail  = ({products}) => {
    const onAdd = () => { 
        console.log ("Agregado al Carrito")
    }

    return (

        <div>

<div className="DivDetail"> 

<div> 
<img src={products.img} alt={products.name} className="ImgItemDetail"/>
<ItemCount onAdd = {onAdd} /> 
</div>

<div class="DivProducts card border-secondary mb-3">
<div class="card-header">{products.name}</div>
<div class="card-body text-secondary">
    <p class="card-text">{products.description}</p>
</div>
<table className="TableClass">
    <th className="ThClass">Otras caracteristicas:</th>
    <tr className="TrClass">Distancia focal del lente: {products.distancia}</tr>
    <tr className="TrClass">Formato del rollo: {products.rollo}</tr>
    <tr className="TrClass">Apertura máxima del lente: {products.apertura}</tr>
    <tr className="TrClass">Con flash incorporado: {products.flash}</tr>
</table>
</div>

</div>
        </div>

    )
}




export default ItemDetail;