setInterval(digitalFunction, 1000);
setInterval(analogFunction, 1000);

function analogFunction(){
    let source = new Date();
    let AmPm = source.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) 
    let AmPmVal = AmPm.slice(8,10);
    let AmPmDiv = document.querySelector('.AmPm').innerHTML = AmPmVal;
    let minutes = source.getMinutes();
    let hours = source.getHours(); 
    let seconds = source.getSeconds();
    // console.log(hours);
    // console.log(minutes); 
    // console.log(seconds);

    if(hours <= 12){
        
    }
    else{
        hours = hours - 12;
    }

    let secondHandDeg = seconds * 6;
    let minuteHandDeg = (minutes * 6) + (seconds * 0.1);
    let hourHandDeg = (hours * 30) + (minutes * 0.5);
    // console.log(seconds)
    // console.log(minutes)   
    // console.log(hours)

    let secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondHandDeg}deg)`;

    let minuteHand = document.querySelector('.minute-hand');
    minuteHand.style.transform = `rotate(${minuteHandDeg}deg)`;

    let hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
}

function digitalFunction(){
    const samayaDiv = document.querySelector('.time');
    const ghanta = document.querySelector('.hours'); 
    const minute = document.querySelector('.minute'); 
    const second = document.querySelector('.second'); 
    const amPm = document.querySelector('.amPm'); 
    function myFunction(){
        var time = new Date();
          var timeValue = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) 
          var ghantaValue = timeValue.slice(0, 2);
          var minuteValue = timeValue.slice(3, 5);
          var secondValue = timeValue.slice(6, 8);
          var amPmValue = timeValue.slice(9, 12);
      
        var splitHour = timeValue.slice(1, 2);
        if(splitHour === ":") {
          ghantaValue = timeValue.slice(0, 1);
          minuteValue = timeValue.slice(2, 4);
          secondValue = timeValue.slice(5, 7);
          amPmValue = timeValue.slice(8, 11)
        }
        ghanta.innerHTML = ghantaValue;
        minute.innerHTML = minuteValue;
        second.innerHTML = secondValue;
        amPm.innerHTML = amPmValue;
      }
      setInterval(myFunction, 1000)
}

analogFunction();

digitalFunction();