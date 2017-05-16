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
      <div className="col-12 city">
        <div className="col-6 col-12-sm">
          <h1 className="city-name">{this.props.city.name}</h1>
        </div>
        <div className="col-3 col-12-sm">
          <h1 className="city-temperature">{Math.round(this.props.city.main.temp)}°</h1>
          <p className="city-conditions">{this.props.city.weather[0].main}</p>
        </div>
        <div className="col-2 col-12-sm">
          <div className="row">
            <div className="col-12">
              <p><span className="font-regular">High</span> {Math.round(this.props.city.main.temp_max)}<br/><span className="font-regular">Low</span> {Math.round(this.props.city.main.temp_min)}</p>
            </div>
          </div>
        </div>
        <div className="col-1 close-button" onClick={this.removeCity}>&#10006;</div>
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
