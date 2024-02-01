const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');




const newYears="1 Jan 2025";

function countdown()
{
    const newYearsDate= new Date(newYears);
    const currentDate=new Date();
    const totalseconds=new Date(newYearsDate - currentDate)/1000;

    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    daysE1.innerHTML=formatTime(days);
    hoursE1.innerHTML=formatTime(hours);
    minsE1.innerHTML=formatTime(mins);
    secondsE1.innerHTML=formatTime(seconds);

    
}

function formatTime(time)
{
    return time <10?`0${time}` : time;
}

countdown();

setInterval(countdown,1000);