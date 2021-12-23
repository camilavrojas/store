import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';

const App = () => {

  return (
    <div className="App"> 
    <CartContextProvider>
    <BrowserRouter> 
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer/>
        </Route>
        <Route path='/category/:categoryId'>
          <ItemListContainer/>
        </Route>
        <Route path='/detail/:paramId'>
         <ItemDetailContainer/>
        </Route>
        <Route path='/cart'> 
        <Cart/>
        </Route>
      </Switch>
     </BrowserRouter>
     </CartContextProvider>
    </div>
  );
}

export default App;
