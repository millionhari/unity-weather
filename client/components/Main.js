import React from 'react'
import Weather from './Weather';
const apiKey = '15efaed5b4ef511416603cb2986b3133';

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Weather</h1>
          <Weather apiKey={apiKey}/>
        </div>
      </div>
    );
  }
}
