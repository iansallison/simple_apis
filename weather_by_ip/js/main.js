function getWeather(city){
  const url = `https://goweather.herokuapp.com/weather/${city}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h3').innerText = `It is ${data.description} with a temperature of ${data.temperature} and windspeed of ${data.wind}`;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getPos(userIP){
  
  const url = `http://ip-api.com/json/${userIP}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        getWeather(data.city)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

fetch('https://ifconfig.me/all.json').then(response => response.json())
  .then(res => { 
    return res.ip_addr;
  }).then(ip => getPos(ip))