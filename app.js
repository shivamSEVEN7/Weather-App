let api = "7159b12f5630fda39a932d0cf5a5ab07";
let url1 = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let url2 = "https://api.openweathermap.org/geo/1.0/direct?limit=1";
let temp = document.querySelector('#temp');
let sun = document.querySelector('#sun img');

let cityOn  = document.querySelector('#city');
let latitude;
let longitude;
let cityInput = document.querySelector('#cityInput');
let btn = document.querySelector('#searchButton');
let city = 'delhi';
let weatherId;
btn.addEventListener('click', async () => {
    city = cityInput.value;
    par2.q = city;
    await geoLocation()
    par1.lat = latitude;
    par1.lon = longitude;
    getWeather();
    
})
const par1 = {
    appid : "7159b12f5630fda39a932d0cf5a5ab07",
    lat : latitude,
    lon : longitude
}
async function getWeather(){
    let res = await axios.get(url1, {params : par1});
    temp.innerHTML = res.data.main.temp + "°c";
    cityOn.innerHTML = city;
    weatherId = res.data.weather[0].id;
    if(weatherId>=200 && weatherId<233){
        sun.setAttribute('src', "images/thunder.png");
    }
    else if(weatherId>=300 && weatherId<322){
        sun.setAttribute('src', "images/drizzle.png");
    }
    else if(weatherId>=500 && weatherId<532){
        sun.setAttribute('src', "images/rain.png");
    }
    else if(weatherId>=600 && weatherId<623){
        sun.setAttribute('src', "images/snow.png");
    }
    else if(weatherId>=701 && weatherId<782){
        sun.setAttribute('src', "images/mist.png");
    }
    else if(weatherId==800){
        sun.setAttribute('src', "images/clear.png");
    }
    else if(weatherId>=801 && weatherId<805){
        sun.setAttribute('src', "images/clouds.png");
    }
}
let par2 = {
    appid : "7159b12f5630fda39a932d0cf5a5ab07",
    q : city
}

async function geoLocation(){
    
    let res = await axios.get(url2, {params : par2});
    city = res.data[0].name;
    latitude = res.data[0].lat;
    longitude = res.data[0].lon;
    
}

