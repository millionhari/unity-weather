import React from 'react'
import PropTypes from 'prop-types';

export default class WeatherView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //TODO: BUILD OUT COMPONENT BASED ON DATA
    console.log(this.props.city);
    return (
      <div className="col-12 city">
        hi
      </div>
    );
  }
}

WeatherView.propTypes = {
  city: PropTypes.object.isRequired
}
