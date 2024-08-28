import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {

  return (
    <nav className='navbar'>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/bracelets">Bracelets</Link>
        <Link to="/about">About Freddy Knijff</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  )
}

export default Navbar
