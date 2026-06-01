const API_KEY = 'ad4acdc3debef01889ee157a6e592b80';
let input = document.getElementById("input");
let search = document.getElementById("search");
let weather = document.getElementById("weatherIcon");
weather.style.display = "none";
let icons = ["cloudy.png","rainy.png","sun.png"];

search.addEventListener("click", ()=>{
    let location = input.value;
    console.log(location);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    fetch(url)
    
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data) 
    {
        console.log(data);
       weather.style.display = "block";
       console.log(data.weather[0].main);
       if(data.weather[0].main === "Clouds")
        {
        console.log("entered if")
        weather.src = "icons/cloudy.png"
        }
        else if(data.weather[0].main === "Clear"){
            weather.src = "icons/sun.png"
        }
    })
    

    
 

})