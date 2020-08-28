import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

function Header(props) {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" className="logoIMG" src={Logo} alt="img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
