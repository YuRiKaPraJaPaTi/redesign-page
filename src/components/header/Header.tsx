import { useState } from 'react';
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {

  const[showMenu, setShowMenu] = useState(false);

  const handleButtonToogle = () => {
    setShowMenu(!showMenu);
  };

  return (
   <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>  <main>MetaLogic</main></h1>
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                 <a >Services</a>
              </li>
              <li> <a >Career</a></li>
              <li>
                 <a >Blogs</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </nav>

          <div className='ham-menu'>
            <button onClick={handleButtonToogle}>
              <GiHamburgerMenu />
            </button>
              
          </div>
        </div>

      </div>
   </header>
  );
};

export default Header;
