import React from 'react'
import PropTypes from 'prop-types';

export default class WeatherView extends React.Component {
  constructor(props) {
    super(props);
    this.removeCity = this.removeCity.bind(this);
  }

  removeCity() {
    const obj = this.props.weatherState;
    delete obj[this.props.city.name];
    this.props.setWeatherState(obj);
    this.props.setToLocalStorage('unity-weather', obj);
  }

  render() {
    return (
      <div className="city">
        <div className="col-6 city-name">
          {this.props.city.name}
        </div>
        <div className="col-5 city-temperature">
          {Math.round(this.props.city.main.temp)}
        </div>
        <div onClick={this.removeCity} className="col-1 close-button">x</div>
      </div>
    );
  }
}

WeatherView.propTypes = {
  city: PropTypes.object.isRequired,
  setWeatherState: PropTypes.func.isRequired,
  getFromLocalStorage: PropTypes.func.isRequired,
  setToLocalStorage: PropTypes.func.isRequired,
  weatherState: PropTypes.object.isRequired
}
