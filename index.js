
var cityName=document.getElementById("cityName");
var tem=document.getElementById("temp");
var obj;
function search_data()
{
    var searchDatal=document.getElementById("searchData");
    cityName.innerText=searchDatal.value;
    console.log(cityName);
var request = new XMLHttpRequest();
            request.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${searchDatal.value}&appid=93f26e3c57081a6210de53b8dcfdfea4`,true);
    request.onload = function()
                {
    if( request.status>=200 && request.status<400)
    {
                var data = JSON.parse(request.responseText);
                console.log(data);
                document.getElementById("temp").innerHTML = data.main.temp+"<sup>o</sup>c";
                obj= data.main.temp;
                document.getElementById("hum").innerHTML = "CLOUDS : "+data.clouds.all+" %";
                document.getElementById('weather').innerHTML=data.weather[0].description+" | "+"humidity : "+data.main.humidity;
                imgs_change(data.main.temp,data.weather[0].description);
                // var icon = data.weather[0].icon+".png";
                // document.getElementById('myimg').src ="https://openweathermap.org/img/w/"+icon ;
     }
    else 
    {
         console.log("some error");
    }
    };
    request.onerror = function(){
         console.log("connection error");
    };
    request.send();
}

function imgs_change(info,des)
{
    document.getElementById('myimg').src ="https://source.unsplash.com/1600x900/?"+des;  
}

var count=0;
function temp_change()
{
    var x=document.getElementById("temp");
    if(count%2==0)
    {
        x.innerHTML=obj+9/5+32+"<sup>o</sup>f";
    }
    else{
        x.innerHTML=obj+"<sup>o</sup>c"; 
    }
    count++;
}

document.getElementById("temp").onclick=temp_change;

function time()
{
    var month=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
    var week=["SUN","MON","TUE","WED","THUS","FRI","SAT"]
    var get=new Date();
    var pm_am=get.getHours>12?"Pm":"Am";
    var time_str=week[get.getUTCDay()]+' | '+month[get.getMonth()]+ get.getDate()+' | '+get.getHours()+":"+get.getMinutes()+":"+get.getSeconds()+" "+pm_am;
    document.getElementById("date").innerText=time_str;
}


setInterval(time,1000)