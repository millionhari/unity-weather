import React from 'react';
import '../scss/Weather.scss';
import PropTypes from 'prop-types';
import { getWeather } from '../actions/weatherActions';
import WeatherForm from './Weather/WeatherForm';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setWeatherState = this.setWeatherState.bind(this);
  }

  addToObj(obj, addObj) {
    return Object.assign({}, obj, addObj)
  }

  getFromLocalStorage(localStorageKey) {
    return JSON.parse(window.localStorage.getItem(localStorageKey));
  }

  setToLocalStorage(localStorageKey, obj) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(obj))
  }

  setWeatherState(obj) {
    this.setState(obj);
  }

  render() {
    console.log(this.state);
    return (
      <WeatherForm
        addToObj={ this.addToObj }
        getFromLocalStorage={ this.getFromLocalStorage }
        setToLocalStorage={ this.setToLocalStorage }
        setWeatherState={ this.setWeatherState }
        apiKey={ this.props.apiKey }
        getWeather={ getWeather }/>
    );
  }
};

Weather.propTypes = {
  apiKey: PropTypes.string.isRequired
}
