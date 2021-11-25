

const ItemListContainer = ({greeting}) => {

    const style = {
        backgroundColor: 'yellow',
        height: 200,
        padding: 40
    }

    return (
        <h1 style={style}>{greeting}</h1>
    )
}



export default ItemListContainer;