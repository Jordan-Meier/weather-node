
var apiKey = require('./../.env').apiKey;
var tempConvertToF = require('./../js/temperature.js').tempConvertToF;
var tempConvertToC = require('./../js/temperature.js').tempConvertToC;


$(document).ready(function() {
  $('.showWeather').hide();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').show();
      $('#city').text(city);
      $('#humidity').text(response.main.humidity);

      $('#celsiusTemp').text(Math.floor(tempConvertToC(response.main.temp)));
      $('#celsius').hide();
      $('#switchToF').hide();

      $('#fTemp').text(Math.floor(tempConvertToF(response.main.temp)));

      $('#switchToC').click(function() {
        $('#celsius').toggle();
        $('#switchToF').toggle();
        $('#f').toggle();
        $('#switchToC').toggle();
      });

      $('#switchToF').click(function() {
        $('#celsius').toggle();
        $('#switchToF').toggle();
        $('#f').toggle();
        $('#switchToC').toggle();
      });

    }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
    });
  });
});

// $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. The temperature in " + city + " is " + Math.floor(tempConvertToF(response.main.temp)) + " degrees F.");
