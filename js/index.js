$(document).ready(function() {
    // Finding user location
   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var weathersite = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?";
    var lat = "lat=" + position.coords.latitude;
    var lon = "lon=" + position.coords.longitude;
    var appid = "897d26571ae0ef6879e42b5b8f06a941";
    var url = weathersite + lat + "&" + lon + "&appid="+ appid;

     // Background images which change depending on the local weather
    var backgroundimages = {

      "Fog" :
      "https://www.howitworksdaily.com/wp-content/uploads/2014/08/fog-06.jpg"
        ,
      "Mist":
      "http://eskipaper.com/images/mist-28.jpg"
        ,
      "Thunderstorm":
       "http://cdn.wallpapersafari.com/84/18/GB4ZUt.jpg"
        ,
      "Drizzle":
      "http://img.wallpaperfolder.com/f/63F6185B034B/rain-heavy-haarp-clouds.jpg"
        ,
      "Rain":
      "http://img.wallpaperfolder.com/f/63F6185B034B/rain-heavy-haarp-clouds.jpg"
        ,
      "Snow":
      "https://static.pexels.com/photos/38928/pexels-photo-38928.jpeg"
        ,
      "Atmosphere": "http://www.mrwallpaper.com/wallpapers/sunny-day-lake-bridge.jpg"
        ,
      "Clear":
      "http://www.mrwallpaper.com/wallpapers/sunny-day-lake-bridge.jpg"
        ,
      "Clouds":
      "http://desktopwalls.net/wp-content/uploads/2014/07/New%20York%20Black%20And%20White%20Cloudy%20Day%20Skyline%20Desktop%20Wallpaper.jpg"
    };

     // Getting the temperature in the user's local area
   $.getJSON(url, function(temp){
     $(".bg").attr("src", backgroundimages[temp.weather[0].main]);
      var city = temp.name;
      var country = temp.sys.country;
      var temperaturekelvins = temp.main.temp;
      var temperaturecelcius = Math.floor(temperaturekelvins - 273);
      var temperaturefarhenheit = Math.floor(temperaturecelcius*9/5 + 32);
      var weatherId = temp.weather[0].id;
      var description = temp.weather[0].description;
      var Description= description.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
      });

     var location = $(".location").html(city + ", " + country);
     var description = $(".description").html(Description);

      // Toggles between Celcius and Fahrenheit
     var unit = "°C";
     var temperature = $(".tempbutton").html(temperaturecelcius+ unit);

     $(".tempbutton").on("click", function(){
        if (unit === "°C"){
            unit = "°F";
           $(".tempbutton").html(temperaturefarhenheit + unit);
        }
        else if (unit === "°F") {
            unit = "°C";
          $(".tempbutton").html(temperaturecelcius+ unit);
        };
      });
    });
    });
  }
});
