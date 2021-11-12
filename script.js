var weather = [];
var x = 273.15;

function CallAjax(city) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))

            weather = JSON.parse(this.response)
                // console.log(JSON.parse(this.response))
            // document.querySelector(".weather").innerHTML = this.response

            document.querySelector(".weather").innerHTML =  `
            
                    <h2>${weather.name}</h5>
                    <h4>Max Temp. ${weather.main.temp_max - x}</h4>
                    <h4>Min Temp. ${weather.main.temp_min - x}</h6>
                    <p>Weather description : ${weather.weather[0].description}</p>
                     `;
            
        }
    }
}


var data1 =[]
function CallAjax1(country){

    var key = "dc9f64f8456f4f9a8f7e67b0e7b0e453"
    // var url = `http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${key}`
    var url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`
    var http = new XMLHttpRequest();
    
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(JSON.parse(this.response))

            var data = JSON.parse(this.response)
            // console.log(typeof(data))
            //  data1.push(data)
            // BindItem(data)

            // document.querySelector(".news").innerHTML = this.response
            document.querySelector(".news").innerHTML = `
                            <h2>Author : ${data.articles[0].author}</h5>
                            <h4>Title : ${data.articles[0].content}</h4>
                            <h4>Description : ${data.articles[0].description}</h6>`
                                            
        }
    }
}


function BindItem(arr){
    var temp=``
    arr.forEach((e)=>{

        temp = `
            <h2>Author : ${data.articles[0].author}</h5>
            <h4>Title : ${data.articles[0].content}</h4>
            <h4>Description : ${data.articles[0].description}</h6>`
    })

    document.querySelector(".news").innerHTML=temp;
}