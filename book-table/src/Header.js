import logo from './assets/logo.svg';
import Nav from './Nav.js';

function Header() {
    return (
        <>
        <img src={logo} alt="Logo" />
        <Nav />
        </>
    )
  }

  export default Header;