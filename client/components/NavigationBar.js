import React from 'react';
import '../scss/NavigationBar.scss';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
};
