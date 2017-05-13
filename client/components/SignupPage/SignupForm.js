import React from 'react'
import PropTypes from 'prop-types';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <div className="six columns">
        <form>

          <h1>Signup</h1>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input onChange={this.onChange} value={this.state.username} type="text" name="username" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input onChange={this.onChange} type="text" name="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input onChange={this.onChange} type="password" name="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="control-label">Password Confirmation</label>
            <input onChange={this.onChange} type="password" name="passwordConfirmation" className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}


SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}
