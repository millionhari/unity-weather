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
    let data = this.getFromLocalStorage('unity-weather');

    if (data === null || Object.keys(data).length === 0) {
      data = this.getDefault();
    }

    var self = this;
    var updateTemp = function () {
      _.each(data, (city) => {
        getWeather((val)=> {
          const newObj = self.addToObj(data, {
            [val.name]: val
          });
          self.setToLocalStorage('unity-weather', newObj);
          self.setState(newObj);
        }, self.props.apiKey, city.name);
      });
    }
    setTimeout(updateTemp, 300);

  }

  getDefault() {
    const defaults = ['San Francisco', 'Copenhagen', 'Shanghai'];
    let defaultObj = {};
    _.each(defaults, (city) => {
      getWeather((val)=> {
        defaultObj[val.name] = val
      }, this.props.apiKey, city)
    })
    return defaultObj;
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
        setToLocalStorage={ this.setToLocalStorage }
        setWeatherState={ this.setWeatherState }
        weatherState={ this.state }
        key={key}
        city={data} />
    })
  }

  render() {
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
