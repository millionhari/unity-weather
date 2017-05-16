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
    this.state = this.getFromLocalStorage('unity-weather') || {};
    this.setWeatherState = this.setWeatherState.bind(this);
  }

  componentWillMount() {
    const data = this.getFromLocalStorage('unity-weather');

    _.each(data, (city) => {
      getWeather((val)=> {
        const newObj = this.addToObj(data, {
          [val.name]: val
        });
        this.setToLocalStorage('unity-weather', newObj);
        this.setState(newObj);
      }, this.props.apiKey, city.name);
    })
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
      return <WeatherView
        getFromLocalStorage={ this.getFromLocalStorage }
        setToLocalStorage={ this.setToLocalStorage }
        setWeatherState={ this.setWeatherState }
        weatherState={ this.state }
        key={key}
        city={data} />
    })
  }

  render() {
    console.log('--Weather State--');
    console.log(this.state);
    return (
      <div>
        <WeatherForm
          addToObj={ this.addToObj }
          getFromLocalStorage={ this.getFromLocalStorage }
          setToLocalStorage={ this.setToLocalStorage }
          setWeatherState={ this.setWeatherState }
          apiKey={ this.props.apiKey }
          getWeather={ getWeather }/>
        {this.renderCities()}
      </div>
    );
  }
};

Weather.propTypes = {
  apiKey: PropTypes.string.isRequired
}
