import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
        <h1>
          <Link to="/" className="header__logo">
            Airbnb 2
          </Link>
        </h1>
        <nav>
          <ul className="header__nav">
            <li>
              <Link to="/castles">Castles</Link>
            </li>
            <li>
              <Link to="/tinyhomes">Tiny Homes</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </nav>
        <div className="profile-dropdown" onClick={toggleModal}>
          {/* TODO: pakeisti i normalu image */}
          <span role="img" aria-label="User">
            👤
          </span>
          <Modal show={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </header>
  );
};

export default Header;