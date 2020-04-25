const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=2c9b7cf9b6a681568dce3128960555ab&query=28.7041,77.1025';

request({ url: url, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to weather service!")
    } else if (response.body.error) {
        console.log("Unable to find location!")
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " +response.body.current.temperature+ " degrees out. It feels like " +response.body.current.feelslike+ " degrees out")
    }
})


const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieW91cnNzaGFobmF3YXoiLCJhIjoiY2s5YTk1cnQ2MDU3djNucDE1eGZjeWN4eCJ9.Gcb-gM3mMFQDuu9VxQVn6w&limit=1';

request({ url: mapbox, json: true}, (error, response) => {
    if(error) {
        console.log("Unable to connect to location services!")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location. Try another search!")
    }else {
        const lattitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(lattitude + " " + longitude)
    }
})