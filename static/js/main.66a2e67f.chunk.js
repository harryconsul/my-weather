(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),c=n.n(i),o=(n(15),n(3)),s=n(4),u=n(6),l=n(5),m=n(7),h=(n(16),function(e){if(e.indexOf("clouds")>=0)return"C";if(e.indexOf("snow")>=0)return"o";switch(e){case"light intensity drizzle":case"drizzle":case"heavy intensity drizzle":case"light intensity drizzle rain":case"drizzle rain":case"heavy intensity drizzle rain":case"shower rain and drizzle":case"heavy shower rain and drizzle":case"shower drizzle":return"d";case"light rain":case"moderate rain":case"heavy intensity rain":case"very heavy rain":case"extreme rain":case"freezing rain":case"light intensity shower rain":case"shower rain":case"heavy intensity shower rain":case"ragged shower rain":return"Y";case"thunderstorm":case"heavy thunderstorm":case"light thunderstorm":case"ragged thunderstorm":return"Z";case"thunderstorm with light drizzle":case"thunderstorm with drizzle":case"thunderstorm with heavy drizzle":case"thunderstorm with rain":return"a";case"thunderstorm with heavy rain":return"b";case"few clouds":return"C";default:return"A"}}),d=function(e){return a.a.createElement("em",{className:"conditionicon"},h(e.condition))},f=function(e){return a.a.createElement("div",{className:"weathertile"},a.a.createElement("div",null,e.day),a.a.createElement("div",null,a.a.createElement("sub",null,e.min," ")," ",a.a.createElement("strong",null,e.current)," ",a.a.createElement("sub",null," ",e.max," ")),a.a.createElement(d,{condition:e.condition}))},w=function(e){return a.a.createElement("div",{className:"forecastbox"},a.a.createElement("div",{className:"currentWeather"},a.a.createElement("em",null," ",e.weather.current," "),a.a.createElement(d,{condition:e.weather.condition})),e.forecast.map(function(e){return a.a.createElement(f,Object.assign({key:e.day},e))}))},y=(n(17),n(8)),p="7338b710bcb207349fa7a7e9c846a5e1",v=function(e){return new Promise(function(t,n){fetch("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&units=metric&appid="+p).then(function(e){e.json().then(function(e){if(e.list){var r=function(e,t){var n=new Map;e.forEach(function(e){var r=e.dt_txt,a=e.main,i=e.weather,c=new Date(r),o=c.toDateString().substring(0,3),s=c.getHours(),u=n.get(o);u?(a.temp_min<u.min&&(u.min=a.temp_min),a.temp_max>u.max&&(u.max=a.temp_max),Math.abs(s-t)<=2&&(u.current=a.temp,u.condition=i[0].description),n.set(o,u)):n.set(o,{current:a.temp,min:a.temp_min,max:a.temp_max,condition:i[0].description})});var r=[];return n.forEach(function(e,t){return r.push(Object(y.a)({day:t},e))}),r}(e.list,(new Date).getHours());t(r)}else n(":( I'm sorry we don't have the forecast for your city")})}).catch(function(e){return n(":( Something went wrong , try again")})})},g=function(e){return new Promise(function(t,n){fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid="+p).then(function(e){e.json().then(function(e){var r=e.main,a=e.weather,i=e.name;r?t({current:r.temp,min:r.temp_min,max:r.temp_max,city:i,condition:a[0].description}):n(":( I'm sorry we don't have the forecast for your city")})}).catch(function(e){return n(":( Something went wrong , try again")})})},E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={weather:{},forecast:[],city:"",error:""},n.searchForeCast=function(e){var t=n.state.city;g(t).then(function(e){return n.setState({weather:e,error:""})}).catch(function(e){return n.setState({error:e,weather:{},forecast:[]})}),v(t).then(function(e){return n.setState({forecast:e,error:""})}).catch(function(e){return n.setState({error:e,forecast:[],weather:{}})}),e.preventDefault()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.forecast,r=t.weather,i=t.city,c=t.error;return a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("h1",null,"Welcome to my myWeather Service!")),a.a.createElement("section",null,a.a.createElement("form",null,a.a.createElement("div",{className:"formcontrol"},a.a.createElement("label",{for:"city"},"City you want to consult "),a.a.createElement("input",{type:"text",value:i,placeholder:"example: Berlin,GER",id:"city",name:"city",onChange:function(t){return e.setState({city:t.target.value})}})),a.a.createElement("button",{onClick:this.searchForeCast}," Get Forecast ")),n.length?a.a.createElement(w,{weather:r,forecast:n}):a.a.createElement("div",{className:"errormsg"},c)))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.66a2e67f.chunk.js.map