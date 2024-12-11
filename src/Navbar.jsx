import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MensDropdown from './MensDropdown';
import WomensDropdown from './WomensDropdown';
import { NavLink } from 'react-router-dom';

function Navbar({ mensData, womensData }) {
  const [user, setUser] = useState(null); // User state

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const signout = () => {
    localStorage.removeItem('currentUser'); // Remove user from localStorage
    setUser(null); // Clear user state
    alert('You have been logged out.');
  };

  return (
    <div
      className="navbar-main"
      style={!user ? { borderBottom: '1px solid lightgray' } : { borderBottom: '1px solid black' }}
    >
      <nav
        className={
          user ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-light'
        }
      >
        <NavLink exact className="navbar-brand" to="/" style={user && { color: 'gold' }}>
          Bewakoof
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown dm">
              <NavLink
                exact
                to="/men-clothing"
                className="nav-link cat"
                style={user ? { color: 'white' } : { color: 'black' }}
              >
                MEN
              </NavLink>
              <MensDropdown data={mensData} />
            </li>
            <li className="nav-item dropdown dw">
              <NavLink
                exact
                to="/women-clothing"
                className="nav-link cat"
                style={user ? { color: 'white' } : { color: 'black' }}
              >
                WOMEN
              </NavLink>
              <WomensDropdown data={womensData} />
            </li>
          </ul>
          <form className="my-2 my-lg-0 navbar-form desk-nav">
            <input
              className="form-control search"
              type="search"
              placeholder="Search by product, category or collection"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <SearchOutlinedIcon />
            </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item user-section">
              <NavLink
                exact
                className="nav-link desk-nav"
                to={!user && '/login'}
                style={user ? { color: 'white', paddingRight: '0px' } : { color: 'black', paddingRight: '0px' }}
              >
                <span>
                  {' '}
                  | Hello {user ? user.email.split('@')[0] : 'User'}
                </span>
                {!user && ' | Login'}
              </NavLink>
              {user && (
                <p
                  className="nav-link desk-nav"
                  onClick={signout}
                  style={{ color: 'white', cursor: 'pointer', marginBottom: '4px' }}
                >
                  | Sign Out
                </p>
              )}
              <div className="mobile-nav">
                {!user && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <NavLink exact className="nav-link mobile-l-s" to="/login" style={{ marginRight: '10px' }}>
                      Login
                    </NavLink>
                    or
                    <NavLink exact className="nav-link mobile-l-s" to="/register" style={{ marginLeft: '10px' }}>
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link desk-nav"
                style={user ? { color: 'white' } : { color: 'black' }}
              >
                <FavoriteBorderIcon />
              </a>
              <p
                className="mobile-nav mobile-wishlist"
                style={user ? { color: 'white' } : { color: 'black' }}
              >
                My Wishlist
              </p>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                className="nav-link desk-nav"
                style={user ? { color: 'white' } : { color: 'black' }}
              >
                <LocalMallOutlinedIcon />
                {/* Bag count or item count can be shown dynamically */}
              </NavLink>
              <NavLink
                exact
                to="/cart"
                className="nav-link mobile-nav"
                style={
                  user
                    ? { color: 'white', margin: '0', border: '0' }
                    : { color: 'black', margin: '0', border: '0' }
                }
              >
                Your Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
//[_{{{CITATION{{{_1{](https://github.com/samblau14/11283group58/tree/87e6ded9a0f3d6f66b2dc7c814248deb332ff933/mern%2Fclient%2Fsrc%2Fcomponents%2Fnavbar.js)[_{{{CITATION{{{_2{](https://github.com/Chittatosh/booktrade/tree/a7258224403e8c2a7979d2dcd01ce3253b57b255/components%2FNavbar.js)[_{{{CITATION{{{_3{](https://github.com/SergioCoto/react_landing_4geek/tree/b50a8f45f4495feaa3392cf4ce9cc591fa665f6e/src%2Fjs%2Fcomponent%2Fnavbar.js)[_{{{CITATION{{{_4{](https://github.com/manucho7/GraphQL-client/tree/01bab86ad56ed61d9136b3bb6198a0772e8e7a86/src%2Fcomponents%2FNav.js)