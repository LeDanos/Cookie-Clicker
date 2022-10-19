const cookie = document.getElementById("cookie")
const counter = document.getElementById("counter")
const clickUpgrade = document.getElementById("clickUpgrade")
const cpcCounter = document.getElementById("cpcCounter")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const cpsCounter = document.getElementById("cpsCounter")

let cookies = 0;
let clickIncrease = 1;
let clickIncreasePrice = 100
let autoclickerIncreace = 0
let autoclickerPrice = 500

cookie.onclick = () => {
    cookies+=clickIncrease;
    if(cookies >= 1000000){
        counter.innerHTML = `${cookies/1000000} million`
    }
    else{
        counter.innerHTML = cookies
    }
}
clickUpgrade.onclick = () => {
    if(cookies >= clickIncreasePrice){
        cookies-=clickIncreasePrice;
        clickIncreasePrice*=3;
        if(clickIncreasePrice >= 1000000){
            clickUpgrade.innerHTML = `Buy upgrade: ${clickIncreasePrice/1000000} million cookies`
        }
        else{
            clickUpgrade.innerHTML=`Buy upgrade: ${clickIncreasePrice} cookies`
        }
        counter.innerHTML = cookies;
        clickIncrease*=2;
        cpcCounter.innerHTML = `Current cookies per click: ${clickIncrease}`
    }
}
autoclickerUpgrade.onclick = () => {
    if(cookies >= autoclickerPrice){
        cookies -= autoclickerPrice;
        autoclickerPrice*=5
        if(clickIncreasePrice >= 1000000){
            autoclickerUpgrade.innerHTML = `Buy autoclicker: ${autoclickerPrice/1000000} million cookies`
        }
        else{
            autoclickerUpgrade.innerHTML=`Buy autoclicker: ${autoclickerPrice} cookies`
        }
        if(autoclickerIncreace==0){
            setInterval(()=>{
                cookies+=autoclickerIncreace;
                if(cookies >= 1000000){
                    counter.innerHTML = `${cookies/1000000} million`
                }
                else{
                    counter.innerHTML = cookies
                }}, 1000);
        }
        autoclickerIncreace++
        cpsCounter.innerHTML = `Current autoclicker click per second: ${autoclickerIncreace}`
    }
}