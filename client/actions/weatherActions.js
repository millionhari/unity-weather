import request from 'superagent';

export function getWeather(weatherData) {
  return dispatch => {
    return request.get('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=15efaed5b4ef511416603cb2986b3133')
  }
}
