import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <nav className="nav-menu">
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
