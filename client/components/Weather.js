import React from 'react';
import '../scss/Weather.scss';
import PropTypes from 'prop-types';
import { getWeather } from '../actions/weatherActions';
import WeatherForm from './Weather/WeatherForm';
import WeatherView from './Weather/WeatherView';
import { each, map } from 'lodash';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getFromLocalStorage('unity-weather');
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

  renderCities() {
    return map(this.state, (data, key) => {
      return <WeatherView key={key} city={data}/>
    })
  }

  render() {
    return (
      <div>
        {this.renderCities()}
        <WeatherForm
          addToObj={ this.addToObj }
          getFromLocalStorage={ this.getFromLocalStorage }
          setToLocalStorage={ this.setToLocalStorage }
          setWeatherState={ this.setWeatherState }
          apiKey={ this.props.apiKey }
          getWeather={ getWeather }/>
      </div>
    );
  }
};

Weather.propTypes = {
  apiKey: PropTypes.string.isRequired
}
