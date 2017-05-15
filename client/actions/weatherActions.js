import request from 'superagent';

export function getWeather(cb, apiKey, city, event) {
  return request
    .get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=imperial&APPID='.concat(apiKey))
    .end((err, res) => {
      cb(res.body);
  })
}
