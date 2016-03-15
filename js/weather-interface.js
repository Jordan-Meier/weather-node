
var apiKey = require('./../.env').apiKey;
var tempConvert = require('./../js/temperature.js').tempConvert;


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. The temperature in " + city + " is " + Math.floor(tempConvert(response.main.temp)) + " degrees F.");
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
