const request = require("request");

const url =
	"http://api.weatherstack.com/current?access_key=92bfb5cbb0fa0d4342d04296c3535e86&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
});
