import CartWidget from './CartWidget'
import { useEffect, useState } from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom'
import { getCategories } from '../../components/Productos/products'

const NavBar = () => { 
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  },[])
 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">Metropolis</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to={'/'} className="nav-link" >Inicio <span className="sr-only"></span></Link>
              </li>
              <div className="Categories">
              {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`} >{cat.description} </Link> )}
              </div>
            </ul>
          </div>
          <CartWidget/>
        </nav>
    )
}

export default NavBar
