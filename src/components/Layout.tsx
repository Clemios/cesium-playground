import React from 'react';
import logo from '../assets/logo.svg';
import './Layout.css';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <span>GraphQL & CesiumJS Playground</span>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
