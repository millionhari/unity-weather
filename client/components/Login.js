import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Login Container</h1>
        <Link to="signup">Sign up</Link>
      </div>
    );
  }
}
