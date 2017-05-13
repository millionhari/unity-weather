import React from 'react';
import '../scss/Weather.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';
import WeatherComponent from './Weather/WeatherComponent';


class Weather extends React.Component {

  render() {
    console.log(this.props.apiKey);
    return (
      <WeatherComponent getWeather={ getWeather }/>
    );
  }
};

Weather.propTypes = {
  apiKey: PropTypes.string.isRequired
}

export default connect(null, { getWeather })(Weather);
