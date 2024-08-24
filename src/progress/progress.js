const startTime = new Date("2019-06-14T04:00:00Z").getTime();
const endTime = new Date("2119-06-14T04:00:00Z").getTime();

document.getElementById("progress-start-time").innerText = new Date(startTime).toLocaleString();
document.getElementById("progress-end-time").innerText = new Date(endTime).toLocaleString();

setInterval(() => {

    let years = new Date(endTime).getUTCFullYear() - new Date().getUTCFullYear();
    let a = new Date(endTime).setUTCFullYear(new Date().getUTCFullYear());

    if (a < Date.now()) {
        a = new Date(endTime).setUTCFullYear(new Date().getUTCFullYear() + 1);
        years--;
    }

    if (years < 0) years = 0;
    let b = Math.max((a - Date.now()) + 1000, 0);
    let days = Math.floor(b / 8.64e7);
    let hours = Math.floor((b % 8.64e7) / 3.6e6);
    let minutes = Math.floor((b % 3.6e6) / 6e4);
    let seconds = Math.floor((b % 6e4) / 1e3);

    let result = "";
    if (years) result += (years === 1 ? "1 year " : years + " years ");
    if (days) result += (days === 1 ? "1 day " : days + " days ");
    if (hours) result += (hours === 1 ? "1 hour ": hours + " hours ");
    if (minutes) result += (minutes === 1 ? "1 minute " : minutes + " minutes ");
    if (seconds) result += (seconds === 1 ? "1 second " : seconds + " seconds ");
    if (result.endsWith(" ")) result = result.slice(0, -1);
    document.getElementById("progress-time-left").innerText = result;

    let progress;
    let elapsed = Date.now() - startTime;
    if (elapsed > (endTime - startTime)) {
        progress = 1;
    } else {
        progress = elapsed / (endTime - startTime);
    }
    document.getElementById("progress-bar").style.width = (progress * 100) + "%";
    document.getElementById("progress-bar-progress").innerText = (progress * 100).toFixed(8);

})

function updateMilestone() {
    let milestone = parseFloat(document.getElementById("progress-milestone").value);
    if (!isFinite(milestone) || milestone < 0) milestone = 0;
    if (milestone > 100) milestone = 100;
    const reachTime = startTime + (milestone / 100) * (endTime - startTime);
    if (Date.now() < reachTime) {
        document.getElementById("progress-tense").innerText = "will reach"
    } else {
        document.getElementById("progress-tense").innerText = "reached"
    }
    document.getElementById("progress-milestone-date").innerText = new Date(reachTime).toLocaleString();
}

document.getElementById("progress-milestone").addEventListener("input", updateMilestone);
updateMilestone();