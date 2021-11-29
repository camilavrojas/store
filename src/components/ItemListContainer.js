import ItemCount from './ItemCount'; 

const ItemListContainer = () => {

    const onAdd = () => { 
        console.log ("Agregado al Carrito")
    }


    return (
        <div> 
            <ItemCount onAdd = {onAdd} /> 

        </div>
    )
}



export default ItemListContainer;