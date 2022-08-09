const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const start = new Date("2019-06-14T04:00:00Z").getTime();
// Progress bar started on June 13, 2019 at 21:00 PDT, or June 14, 2019 at 04:00 UTC.
const end = new Date("2119-06-14T04:00:00Z").getTime();
// Progress bar ends on June 13, 2119 at 21:00 PDT, or June 14, 2119 at 04:00 UTC.


// Table of Milestones

for (i = 0; i < 101; i++) {
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    col1.innerText = i + '%';
    row.appendChild(col1);
    const col2 = document.createElement("td");
    const pd = new Date(start + (end - start) * i / 100);
    col2.innerText = `${weekDays[pd.getDay()]} ${pd.getDate()} ${shortMonths[pd.getMonth()]} ${pd.getFullYear()} ${twoDigits(pd.getHours())}:${twoDigits(pd.getMinutes())}:${twoDigits(pd.getSeconds())}`;
    row.appendChild(col2);
    document.querySelector("table").appendChild(row);
}

setInterval(() => {
    const duration = end - start;
    const elapsed = Date.now() - start;
    let progress;
    if (elapsed >= duration) {
        progress = 1;
        document.querySelector("#timeLeft").innerText = '0 seconds';
    } else {
        progress = elapsed / duration;
        document.querySelector("#timeLeft").innerText = getDuration(Date.now(), end + 1000);
    }
    document.querySelector("#started").innerText = getDuration(start, Date.now());
    document.querySelector(".bar").style.width = (progress * 100) + "%";
    document.querySelector("#progress").innerText = (progress * 100).toFixed(8);
}, 100 / 3) // Update 30 times per second