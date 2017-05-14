import request from 'superagent';

export function getWeather(cb, apiKey) {
  return request
    .get('http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco&units=imperial&APPID='.concat(apiKey))
    .end((err, res) => {
      cb(res.body);
  })
}
