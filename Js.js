var hour= document.getElementById("h");
var minute= document.getElementById("m");
var seconds= document.getElementById("s");
var dn= document.getElementById("dn");

setInterval(() => {
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let dN="AM";

    if(hr > 12){
        dN="PM";
        hr=hr - 12;
    }

    if(min < 10){
        min="0" + min;
    }

    if(sec < 10){
        sec="0" + sec;
    }

    if(hr < 10){
        hr="0" + hr;
    }

    h.textContent=hr;
    m.textContent=min;
    s.textContent=sec;
    dn.textContent=dN;



});

console.log(document.URL);
console.log(document.domain);