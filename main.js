let input=document.querySelector("input");
let button=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let img=document.querySelector('img')

const getWeather= async ()=>{

    const response= await fetch (`https://api.weatherapi.com/v1/current.json?key=43bb41dd1f7c43af94150820240501&q=${input.value}&aqi=yes`)

    const data= await response.json();

    h1.innerText= 'City:'  + " " + data.location.name
    h1.style.color="white"
    h3.innerText= 'Temperature:' + " " + data.current.temp_c
    h3.style.color="white"
    img.setAttribute('src',data.current.condition.icon)
    // console.log(data);
}
button.addEventListener("click",getWeather);