import './NavBar.css'

const CartWidget = () => {

    const style = {
        height: 30
    }

    return (
        <img className="ImgCart" style={style} src={'./cart.png'} alt="carrito de compras"/> 
    )
}

export default CartWidget;

