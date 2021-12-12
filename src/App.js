import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter> 
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer/>
        </Route>
        <Route patch='/detail/:paramId'>
         <ItemDetailContainer/>
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
