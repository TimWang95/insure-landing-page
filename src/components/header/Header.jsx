import { ReactComponent as Logo } from 'src/assests/images/logo.svg'
import { ReactComponent as IconHamburger } from 'src/assests/images/icon-hamburger.svg'
import { ReactComponent as IconClose } from 'src/assests/images/icon-close.svg'

export default function Header() {
  return (
    <>
      <header className="site-header">
        {/* logo */}
        <div className="logo-container">
          <Logo className='logo'/>
        </div>

        {/* navb ar-toggle */}
        <input type="checkbox" id="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <IconHamburger className='icon-toggle cursor-pointer'/>
          <IconClose className='icon-toggle-close d-none'/>
        </label>
        
        {/* navbar-menu */}
        <nav className="navbar-menu">
          <ul className="nav-list">
            <li className="nav-item ">
              <a href="#" className="nav-link">HOW WE WORK</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">BLOG</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">ACCOUNT</a>
            </li>
            <li className="nav-item view-plans">
              <a href="#" className="nav-link">VIEW PLANS</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}