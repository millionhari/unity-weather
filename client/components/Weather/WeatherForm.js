import React from 'react'
import PropTypes from 'prop-types';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    window.localStorage.getItem('unity-weather');

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    //TODO: MAKE SURE SYNC AND LOCALSTORAGE ARE SYNCED, SET STATE EVERYTIME YOU SET LOCAL STORAGE SO RENDER UPDATES CAN HAPPEN
    e.preventDefault();
    const data = this.props.getFromLocalStorage('unity-weather');
    this.props.getWeather((val)=> {
      const newObj = this.props.addToObj(data, {
        [val.name]: val
      });
      this.props.setToLocalStorage('unity-weather', newObj);
    }, this.props.apiKey)
    this.props.setWeatherState(data);
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
  getWeather: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
  addToObj: PropTypes.func.isRequired,
  getFromLocalStorage: PropTypes.func.isRequired,
  setToLocalStorage: PropTypes.func.isRequired,
  setWeatherState: PropTypes.func.isRequired,
}
