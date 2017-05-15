import React from 'react'
import PropTypes from 'prop-types';

export default class WeatherView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //TODO: BUILD OUT COMPONENT BASED ON DATA
    // console.log(this.props.city);
    return (
      <div className="city">
        <div className="col-6 city-name">
          {this.props.city.name}
        </div>
        <div className="col-6 city-temperature">
          {Math.round(this.props.city.main.temp)}
        </div>
      </div>
    );
  }
}

WeatherView.propTypes = {
  city: PropTypes.object.isRequired
}
