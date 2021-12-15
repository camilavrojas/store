import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App"> 
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
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
