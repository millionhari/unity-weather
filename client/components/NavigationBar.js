import React from 'react';
import '../scss/NavigationBar.scss';

export default class NavigationBar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="./"><img class="unity-logo" src="https://unity3d.com/profiles/unity3d/themes/unity/images/company/brand/logos/primary/unity-logo-white.png" alt="Unity logo"/></a>
          </li>
        </ul>
      </div>
    );
  }
};
