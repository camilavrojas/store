import ItemCount from './ItemCount'; 

const ItemListContainer = () => {

    const onAdd = () => { 
        console.log ("Agregado al Carrito")
    }

    const style = {
        backgroundColor: 'yellow',
        height: 200,
        padding: 40
    }

    return (
        <div> 
            <ItemCount onAdd = {onAdd} /> 

        </div>
    )
}



export default ItemListContainer;