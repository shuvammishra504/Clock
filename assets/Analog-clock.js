function datFunction(){
    let source = new Date();
    let AmPm = source.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) 
    let AmPmVal = AmPm.slice(7,10);
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
    let minuteHandDeg = minutes * 6;
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

setInterval(datFunction, 1000)