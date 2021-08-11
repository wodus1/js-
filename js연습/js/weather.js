
function onGeo(position){
    const lati=position.coords.latitude;
    const long=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=e4bcd67c7343b4281c0779c466473afd&units=metric`
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const weather=document.querySelector("#weather span:first-child")
            const city=document.querySelector("#weather span:last-child")
            city.innerText=data.name;
            weather.innerText=`${data.weather[0].main} ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("사용자의 위치를 찾을 수 없습니다.")
}
navigator.geolocation.getCurrentPosition(onGeo,onGeoError);