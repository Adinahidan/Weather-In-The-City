function GetInfo(){
    var newName= document.getElementById("cityInput");
    var cityName= document.getElementById("cityName");
    cityName.innerHTML ="--" + newName.value + "--"
}
var apiKey ="0e191ea2211a6625451a4e17b01003c6"
fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=0e191ea2211a6625451a4e17b01003c6")
.then(response=>response.json())
.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"Min").innerHTML="Min:" +Number(data.list[i].)
    }
})