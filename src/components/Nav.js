import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>S447</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Works"
            >
              <b>Portfolio</b>
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Shop"
            >
              <b>Shop</b>
            </Link>
          </li>
          { /* <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              TBD
            </Link>
            </li> */}
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
