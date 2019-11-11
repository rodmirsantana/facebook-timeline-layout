import React, { Component } from 'react';

import './styles.css';
import logo from '../../assets/facebook-logo.png';
import profileImg from '../../assets/profile-img.jpg';

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="content">
            <div id="header-logo">
              <img src={logo} alt="facebook-logo" />
            </div>
            <div className="profileLink">
              <a href="javascript:void()">
                Meu Perfil
                <img src={profileImg} className="avatar" alt="profile-image" />
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
