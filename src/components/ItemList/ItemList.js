import Item from '../../components/Item/Item.js';

const ItemList = ({products = [] }) => {

    return (
       <div> 
           {products.map(product => <Item key={product.id} product={product}/>)}
       </div>
    );
}
export default ItemList;