function isLeap(e){return!(e%4)&&!(!(e%100)&&e%400)}function getDuration(e,t){if(e=new Date(e),(t=new Date(t)).getTime()<e.getTime()){let T=e;e=t,t=T}if(t.getTime-e.getTime<1e3)return"0 seconds";let T,a,n,o,g,h=[31,28,31,30,31,30,31,31,30,31,30,31],l=[31,29,31,30,31,30,31,31,30,31,30,31],s=t.getUTCFullYear()-e.getUTCFullYear(),C=new Date(e.setUTCFullYear(2e3)),U=new Date(t.setUTCFullYear(2e3));if(U.getTime()<C.getTime()?(s-=1,T=U.getUTCMonth()-C.getUTCMonth()+12):T=U.getUTCMonth()-C.getUTCMonth(),C=new Date(C.setUTCMonth(1)),(U=new Date(U.setUTCMonth(1))).getTime()<C.getTime()){T-=1,a=isLeap(t.getUTCMonth()?t.getUTCFullYear():t.getUTCFullYear()-1)?l[t.getUTCMonth()?t.getUTCMonth()-1:11]-e.getUTCDate()+t.getUTCDate():h[t.getUTCMonth()?t.getUTCMonth()-1:11]-e.getUTCDate()+t.getUTCDate(),C=new Date(C.setUTCDate(1)),(U=new Date(U.setUTCDate(1)))<C&&(U=new Date(U.setUTCDate(2)),a-=1);let s=U.getTime()-C.getTime();n=Math.floor(s%864e5/36e5),o=Math.floor(s%36e5/6e4),g=Math.floor(s%6e4/1e3)}else{let e=U.getTime()-C.getTime();a=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4),g=Math.floor(e%6e4/1e3)}let i=[];return s&&i.push(`${s} year${1===s?"":"s"}`),T&&i.push(`${T} month${1===T?"":"s"}`),a&&i.push(`${a} day${1===a?"":"s"}`),n&&i.push(`${n} hour${1===n?"":"s"}`),o&&i.push(`${o} minute${1===o?"":"s"}`),g&&i.push(`${g} second${1===g?"":"s"}`),i.join(", ")}
const start = new Date("2019-06-14T04:00:00Z").getTime()
const end = new Date("2119-06-14T04:00:00Z").getTime()
setInterval(() => {
    const duration = end - start
    const elapsed = Date.now() - start
    let progress;
    if (elapsed >= duration) {
        progress = 1;
        document.querySelector("#timeLeft").innerText = '0 seconds'
    } else {
        progress = elapsed / duration;
        document.querySelector("#timeLeft").innerText = getDuration(Date.now(), end + 1000)
    }
    document.querySelector("#started").innerText = getDuration(start, Date.now())
    document.querySelector(".bar").style.width = (progress * 100) + "%"
    document.querySelector("#progress").innerText = (progress * 100).toFixed(8)
}, 100/3)
