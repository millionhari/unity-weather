import React from 'react'
import PropTypes from 'prop-types';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
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
    this.props.getWeather(this.state);
    console.log(e);
  }

  render() {
    return (
      <div className="col-12">
        <div className="form-group">
          <label className="control-label">City</label>
          <input onChange={this.onChange} value={this.state.city} type="text" name="city" className="form-control"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>
            Add City
          </button>
        </div>
      </div>
    );
  }
}


SignupForm.propTypes = {
  getWeather: PropTypes.func.isRequired
}
