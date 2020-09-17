import React, { useState } from 'react';
import Nav from './Nav';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>

        <nav>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span className="fred">Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
