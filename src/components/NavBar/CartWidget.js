import './NavBar.css'

const CartWidget = () => {

    const style = {
        height: 30
    }

    return (
        <button className='CartW'>
            <img className="ImgCart" style={style} src={'./cart.png'} alt="carrito de compras"/> 
            0
        </button>

    )
}

export default CartWidget;



