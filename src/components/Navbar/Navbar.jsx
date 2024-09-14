import { Link } from "react-router-dom"
import './Navbar.css'
import { useState } from "react"
import logo from './../../assets/icons/logo.svg'
import menuIcon from './../../assets/icons/menu.svg'
import closeIcon from './../../assets/icons/close.svg'

function Navbar() {
  const [opened, setOpened] = useState(false)
  const handleClick = () => setOpened(state => !state)
  const handleLinkClick = () => setOpened(false);  
  return (
    <nav className='navbar'>
        <div className="icon">
          <img src={logo} alt="" width="30" height="30" />
        </div>
        <ul className={opened ? 'opened' : ''}>
          <Link onClick={handleLinkClick} to="/">Home</Link>
          <Link onClick={handleLinkClick} to="/bracelets">Bracelets</Link>
          <Link onClick={handleLinkClick} to="/about">About Freddy Knijff</Link>
          <Link onClick={handleLinkClick} to="/contact">Contact</Link>

        </ul>        
        <div className="icon hamburger">
          {!opened && <img onClick={handleClick} src={menuIcon} alt="" width="30" height="30" />}
          {opened && <img onClick={handleClick} src={closeIcon} alt="" width="30" height="30" />}
        </div>
    </nav>
  )
}

export default Navbar
