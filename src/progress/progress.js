// LAST UPDATED January 15, 2022 21:50 PST
const weekDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],start=new Date("2019-06-14T04:00:00Z").getTime(),end=new Date("2119-06-14T04:00:00Z").getTime();for(i=0;i<101;i++){const e=document.createElement("tr"),t=document.createElement("td");t.innerText=i+"%",e.appendChild(t);const n=document.createElement("td"),r=new Date(start+(end-start)*i/100);n.innerText=`${weekDays[r.getDay()]} ${r.getDate()} ${shortMonths[r.getMonth()]} ${r.getFullYear()} ${twoDigits(r.getHours())}:${twoDigits(r.getMinutes())}:${twoDigits(r.getSeconds())}`,e.appendChild(n),document.querySelector("table").appendChild(e)}setInterval(()=>{const e=end-start,t=Date.now()-start;let n;t>=e?(n=1,document.querySelector("#timeLeft").innerText="0 seconds"):(n=t/e,document.querySelector("#timeLeft").innerText=getDuration(Date.now(),end+1e3)),document.querySelector("#started").innerText=getDuration(start,Date.now()),document.querySelector(".bar").style.width=100*n+"%",document.querySelector("#progress").innerText=(100*n).toFixed(8)},100/3);