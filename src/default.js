window.onload = async function() {
    const req = await fetch("https://randomperson3465.github.io/src/navbar.json")
    const json = await req.json()
    for (const entry of json.data) {
        if (!entry.dropdown) {
            var a = navbar.appendChild(document.createElement("a"))
            a.innerText = entry.name
            a.href = entry.link ? entry.link : "";
        } else {
            var a = navbar.appendChild(document.createElement("div"))
            a.className = "dropdown";
            var b = a.appendChild(document.createElement("button"))
            b.innerText = entry.name;
            b.className = "dropdown-button";
            var c = a.appendChild(document.createElement("div"))
            c.className = "dropdown-content";
            for (const item of entry.items) {
                var d = c.appendChild(document.createElement("a"))
                d.innerText = item.name
                d.href = item.link ? item.link : "";
            }
        }
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dates = document.getElementsByClassName("date")
    for (i = 0; i < dates.length; i++) {
        const date = new Date(dates[i].getAttribute("ts"))
        dates[i].innerText = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }
    var y = document.querySelector(".year")
    if (y) y.innerText = new Date().getFullYear();
}
