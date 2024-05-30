
/*const apiurl = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const apikey = '7a2c85bd7dmsh546494074131dafp1bf4bdjsnaed6bd98adad';
async function checkWeather() {
	const response = await fetch(apiurl + `&appid=${apikey}`);
	var data = await response.json();
	console.log(data);
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = data.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.humidity + "%";
	document.querySelector(".wind").innerHTML = wind_speed + "km/hr";

}
checkWeather();
*/const options ={
	method:'GET',
	headers:{
		'X-RapidAPI-Key': '7a2c85bd7dmsh546494074131dafp1bf4bdjsnaed6bd98adad',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

	}
};

const getWeather = (city)=>{
	cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
.then(response => response.json())
.then((response) => {


	console.log(response)
	
	document.querySelector(".temp").innerHTML = response.temp + "°C";
    document.querySelector(".humidity").innerHTML = response.humidity + "%";
	document.querySelector(".wind").innerHTML = response.wind_speed + "km/hr";

		
	
})
.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	
	getWeather(city.value )

})
getWeather("Delhi")

