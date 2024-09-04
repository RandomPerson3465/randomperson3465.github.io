class LongDate {
    constructor(timestamp) {
        if (!timestamp) timestamp = Date.now();
        if (typeof timestamp !== "bigint") timestamp = BigInt(timestamp);
        this.timestamp = timestamp;
    }
    static msIn400Years = (365n * 303n + 366n * 97n) * 86400000n
    static twoDigits(n) {
        if (n < 10) {
            return "0" + n;
        } else {
            return n;
        }
    }
    static bigIntMax(a, b) {
        if (a > b) return a;
        else return b;
    }
    static writeScientificNum(p_num, p_precision) {
        let n = Math.round(Math.log10(p_num));
        let m = (p_num * (Math.pow(10,Math.abs(n)))).toFixed(p_precision);
        return m.toString() + ' × 10<sup>' + n.toString() + '</sup>';
    } // https://jsfiddle.net/u1hd4zm9/
      
    static formatDuration(startLongDate, endLongDate) {
        let years = endLongDate.getUTCYear() - startLongDate.getUTCYear();
        let a = new LongDate(endLongDate.getTime()).setUTCYear(startLongDate.getUTCYear()).getTime();
        if (a < startLongDate.getTime()) {
            a = new LongDate(endLongDate.getTime()).setUTCYear(startLongDate.getUTCYear() + 1n).getTime();
            years--;
        }
        let b = LongDate.bigIntMax((a - startLongDate.getTime()) + 1000n, 0n);
        let days = b / 86_400_000n;
        let hours = (b % 86_400_000n) / 3_600_000n;
        let minutes = (b % 3_600_000n) / 60000n;
        let seconds = (b % 60000n) / 1000n;

        let result = "";
        if (years) result += (years === 1n ? "1 year " : years + " years ");
        if (days) result += (days === 1n ? "1 day " : days + " days ");
        if (hours) result += (hours === 1n ? "1 hour ": hours + " hours ");
        if (minutes) result += (minutes === 1n ? "1 minute " : minutes + " minutes ");
        if (seconds) result += (seconds === 1n ? "1 second " : seconds + " seconds ");
        if (result.endsWith(" ")) result = result.slice(0, -1);
        return result;
    }
    static formatShortDuration(t) {
        if (t > Number.MAX_VALUE) return "An eternity"
        if (t >= LongDate.msIn400Years * 2_500_000_000n) {
            return (Number(t) / (365.2425*864e5)).toExponential(1).replace("e+", " × 10^") + " years";
        }
        if (t >= LongDate.msIn400Years * 2_500_000n) {
            return (Number(t) / (365.2425*864e5) / 1e9).toFixed(1) + " billion years"
        }
        if (t >= LongDate.msIn400Years * 2500n) {
            return (Number(t) / (365.2425*864e5) / 1e6).toFixed(1) + " million years"
        }
        t = Number(t);
        if (t >= (548*864e5)) return `${Math.round(t / (365.2425*864e5)).toLocaleString("en-US", { maximumSignificantDigits: 3 })} years`;
        else if (t >= 50*864e5) return `${Math.round(t / (30.4325*864e5))} months`;
        else if (t >= 2*864e5) return `${Math.round(t / 864e5)} days`;
        else if (t >= 90*6e4) return `${Math.round(t / 3.6e6)} hours`;
        else if (t >= 9e4) return `${Math.round(t / 6e4)} minutes`;
        else if (t >= 1500) return `${Math.round(t / 1e3)} seconds`;
        else if (t >= 1000) return "1 second";
        else return "<1 second";
    }
    getTime() {
        return this.timestamp;
    }
    getCalendarEquivalent() {
        return new Date(Number(((this.timestamp % LongDate.msIn400Years) + LongDate.msIn400Years) % LongDate.msIn400Years));
    }
    getUTCMilliseconds() {
        return this.getCalendarEquivalent().getUTCMilliseconds();
    }
    getUTCSeconds() {
        return this.getCalendarEquivalent().getUTCSeconds();
    }
    getUTCMinutes() {
        return this.getCalendarEquivalent().getUTCMinutes();
    }
    getUTCHours() {
        return this.getCalendarEquivalent().getUTCHours();
    }
    getUTCDay() {
        return this.getCalendarEquivalent().getUTCDay();
    }
    getUTCDayName() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.getUTCDay()];
    }
    getUTCDate() {
        return this.getCalendarEquivalent().getUTCDate();
    }
    getUTCMonth() {
        return this.getCalendarEquivalent().getUTCMonth();
    }
    getUTCMonthName() {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.getUTCMonth()];
    }
    getUTCYear() {
        if (this.timestamp >= 0) {
            return ((this.timestamp / LongDate.msIn400Years) * 400n) + BigInt(this.getCalendarEquivalent().getUTCFullYear());
        } else {
            return ((this.timestamp / LongDate.msIn400Years - 1n) * 400n) + BigInt(this.getCalendarEquivalent().getUTCFullYear());
        }
    }
    getUTCYearName() {
        if (this.getUTCYear() < 1n) {
            if (this.getUTCYear() <= -9999n) {
                return (1n - this.getUTCYear()).toLocaleString("en-US").replaceAll(",", " ") + " BC";
            } else {
                return (1n - this.getUTCYear()) + " BC";
            }
        } else {
            if (this.getUTCYear() < 1000n || this.getUTCYear() >= 10000n) {
                return "AD " + this.getUTCYear().toLocaleString("en-US").replaceAll(",", " ");
            } else {
                return this.getUTCYear();
            }
        }
    }
    toString() {
        return `${this.getUTCDayName()}, ${this.getUTCDate()} ${this.getUTCMonthName()} ${this.getUTCYearName()}, ${LongDate.twoDigits(this.getUTCHours())}:${LongDate.twoDigits(this.getUTCMinutes())}:${LongDate.twoDigits(this.getUTCSeconds())}`
    }
    setLongDate(year, month, date, hours, minutes, seconds, milliseconds) {
        let equivalentYear = Number(1970n + (((year-1970n) % 400n) + 400n) % 400n);
        let t = BigInt(Date.UTC(equivalentYear, month, date, hours, minutes, seconds, milliseconds));
        if (year < 1970n) {
            t += (((year - 1970n) / 400n) - 1n) * LongDate.msIn400Years;
        } else {
            t += ((year - 1970n) / 400n) * LongDate.msIn400Years;
        }
        this.timestamp = t;
        return this;
    }
    setUTCYear(year) {
        return this.setLongDate(year, this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds(), this.getUTCMilliseconds());
    }
}

const urlparams = new URLSearchParams(window.location.href.replace(window.location.origin + window.location.pathname, ""));

try {

    const start = new LongDate().setLongDate(BigInt(urlparams.get("startYear")), parseInt(urlparams.get("startMonth")), parseInt(urlparams.get("startDate")), parseInt(urlparams.get("startHour")), parseInt(urlparams.get("startMinute")), parseInt(urlparams.get("startSecond")), 0);
    const end = new LongDate().setLongDate(BigInt(urlparams.get("endYear")), parseInt(urlparams.get("endMonth")), parseInt(urlparams.get("endDate")), parseInt(urlparams.get("endHour")), parseInt(urlparams.get("endMinute")), parseInt(urlparams.get("endSecond")), 0);


    if (end.getTime() < start.getTime()) {
        throw new RangeError("The start time needs to be before the end time.");
    }
    document.querySelector(".title").innerText = urlparams.get("barTitle") || "My Progress Bar";
    

    function updateProgress(time) {
        let progress = Number(((time - start.getTime()) * 1000000000000000n / (end.getTime() - start.getTime()))) / 1e15;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        document.getElementById("progress-bar-progress").innerText = (progress * 100).toFixed(urlparams.get("numDigits") || 4);
        document.getElementById("progress-bar").style.width = (progress * 100) + "%";
        if (progress >= 1) {
            document.getElementById("progress-time-left").innerText = "0 seconds";
        } else {
            if (urlparams.get("useShortDuration")) {
                document.getElementById("progress-time-left").innerText = `${LongDate.formatShortDuration(end.getTime() - BigInt(Date.now()))}`;
            } else {
                document.getElementById("progress-time-left").innerText = `${LongDate.formatDuration(new LongDate(Date.now()), end)}`;
            }
        }
    }

    updateProgress(BigInt(Date.now()));

    setInterval(() => {
        updateProgress(BigInt(Date.now()));
    }, 30)

} catch (error) {
    console.error(error);
    alert(`An error occured: ${error} Make sure you have the right URL!`);
}