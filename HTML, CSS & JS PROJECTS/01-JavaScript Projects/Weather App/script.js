// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=44075f74328d5de68bbc96d2959fac89


const apiKey='44075f74328d5de68bbc96d2959fac89';

// Following line will return a Promise
// console.log(fetch('https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=44075f74328d5de68bbc96d2959fac89'));

var apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let userInput=document.querySelector('.input-container input');
console.log(userInput);
let searchBtn=document.querySelector('.input-container button');
console.log(searchBtn);



 


async function checkWeather(cityName){
    const promise = await fetch(apiUrl+cityName+ `&appid=${apiKey}`);
    var data = await promise.json();
    console.log(data);
    
    if(promise.status==200){
        
        
        document.querySelector('.weather-info .city-name').innerHTML=data.name;
        document.querySelector('.weather-info .temperature ').innerHTML = Math.round(data.main.temp)+'º Celcius';
        document.querySelector('.weather-info .humidity-percentage ').innerHTML = data.main.humidity+' %';
        document.querySelector('.weather-info .wind-speed ').innerHTML = Math.round(data.wind.speed)+' Km/h';

        document.querySelector('.weather-info').style.display="block";
        document.querySelector('.invalid-city-name').style.display="none"; 

    }
    else{
        document.querySelector('.weather-info').style.display="none";
        document.querySelector('.invalid-city-name').style.display="block"; 
    }

}

searchBtn.addEventListener('click',()=>{
    checkWeather(userInput.value);
});
userInput.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        checkWeather(userInput.value);
    }
    else{
        console.log('anything');
    }
});







