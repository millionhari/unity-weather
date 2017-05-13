import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

import SignupForm from './SignupPage/SignupForm';

class Signup extends React.Component {
  render() {
    console.log(userSignupRequest);
    const { userSignupRequest } = this.props;
    console.log(userSignupRequest);
    return (
      <div className="container">
        <div className="row">
          <SignupForm userSignupRequest={ userSignupRequest }/>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);
