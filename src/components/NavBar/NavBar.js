import CartWidget from './CartWidget'
import './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">Metro-polis</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to={'/'} className="nav-link" >Inicio <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link to={'/detail'} className="nav-link" href="/#">Categorias</Link>
      </li>
    </ul>
  </div>
  <CartWidget/>
</nav>
    )
}

export default NavBar
