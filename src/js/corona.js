    document.bgColor = "#333"
    const loadTime = Date.now()
    
    class formatDate extends Date {
        format() {
            const days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
            return `${days[this.getUTCDay()]} at ${this.getUTCHours() < 10 ? "0" + this.getUTCHours() : this.getUTCHours()}:${this.getUTCMinutes() < 10 ? "0" + this.getUTCMinutes() : this.getUTCMinutes()}`
        }
    }
    
    async function getCoronaStats() {
        let request = await fetch("https://corona.lmao.ninja/all")
        let data = await request.json().catch(() => {})
        if (!data) return;
        count.innerHTML = data.cases
        deaths.innerHTML = data.deaths
        active.innerHTML = (data.cases - data.recovered) - data.deaths
        recovered.innerHTML = data.recovered
        lastUpdate.innerHTML = `Data last updated: ${new formatDate(data.updated).format()} UTC`
    }
    setInterval(getCoronaStats, 300000)
    getCoronaStats()
    
    function updateTime() {
        let seconds = 300 - ((Math.round((Date.now() - loadTime) / 1000)) % 300)
        let mins = Math.floor(seconds/60)
        let secs = seconds % 60
        if (secs < 10) secs = "0" + secs
        info.innerHTML = `Counts will update in ${mins}:${secs}, if any data is changed`
    }
    setInterval(updateTime, 1000)
