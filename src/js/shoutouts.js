const Shoutouts = [{
    name: "Yamil Videos",
    youtube: "https://www.youtube.com/channel/UCElBQAXeOIarbkgeAt8TOPw"
}, {
    name: "TBK331 CompleXX",
    description: "So well, I'm just a content creator",
    youtube: "https://www.youtube.com/channel/UC39_-Eip5S7ub4JnGRejxNA",
    twitter: "https://twitter.com/TBK331_CompleXX"
}, {
    name: "Daste",
    description: "I do sub battles and COVID-19 stats!",
    youtube: "https://www.youtube.com/channel/UCI-FwGLrDb7j1VuK9pXeN_g",
    twitter: "https://twitter.com/DasteYT"
}, {
    name: "LongGM",
    description: "Vietnamese Youtuber doing Minecraft and etc., also in YTB community",
    youtube: "https://www.youtube.com/channel/UCvmonOo4_swlcshscHWnsvQ",
    twitter: "https://twitter.com/LonggmV",
    twitch: "https://twitch.tv/longgm_vn"
}, {
    name: "εvσℓ",
    twitter: "twitter.com/evol_OW"
}, {
    name: "Donny",
    description: "I'm Donny and help me Defeat Johnny!",
    youtube: "https://www.youtube.com/channel/UCzAvky9XteutzsRdpkD6CCA"
}, {
    name: "Zeefeew",
    description: "I make videos comedy,gaming and i make challenge too",
    youtube: "https://www.youtube.com/channel/UC-6YsaQZhfLnpVNfe4GTJBg"
}, {
    name: "not your father in law",
    twitter: "https://twitter.com/yeetbythewindow"
}, {
    name: "SuperWindows78",
    description: "Hello, I am SuperWindows78, I do logo evolution, and Subscriber Timelapses, I am looking to be on the page of the site, I want to be more special, And I promise to upload videos using your Livecountsedit site. I have got in touch with you on Discord before, but you deleted the server. Thank you, And I hope you understand. :)",
    youtube: "https://www.youtube.com/channel/UC6z8y5o8uaKuWTxP2zsHxiQ"
}, {
    name: "decorativeben",
    description: "I am a gaming channel that would like to grow.",
    youtube: "https://www.youtube.com/channel/UCFfye6PXQpaIBXF9kx_95wQ"
}]

let previousShoutout;

function randomShoutout() {
    let s = Shoutouts[Math.floor(Math.random() * Shoutouts.length)]
    while (s === previousShoutout) {
        s = Shoutouts[Math.floor(Math.random() * Shoutouts.length)]
    }
    previousShoutout = s
    let shoutoutElement = document.getElementById("shoutout")
    while (shoutoutElement.childElementCount) {
        shoutoutElement.removeChild(shoutoutElement.firstChild)
    }
    let n = document.createElement("h3")
    n.innerHTML = s.name
    n.className = "shoutoutName"
    shoutoutElement.appendChild(n)
    if (s.description) {
        let d = document.createElement("h4")
        d.innerHTML = s.description
        d.className = "shoutoutDescription"
        shoutoutElement.appendChild(d)
    }
    let otherElements = Object.keys(s).filter(k => k !== "name" && k !== "description")
    for (const elem of otherElements) {
        let link = s[elem]
        let linkElement = document.createElement("a")
        linkElement.href = link
        linkElement.innerHTML = link
        let actualElement = document.createElement("li")
        actualElement.className = "shoutoutLink"
        actualElement.appendChild(linkElement)
        shoutoutElement.appendChild(actualElement)
    }
}
setInterval(randomShoutout, 5000)
randomShoutout()
