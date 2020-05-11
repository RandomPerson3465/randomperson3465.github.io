const Shoutouts = [{
    name: "Tonio",
    youtube: "https://www.youtube.com/channel/UCLUfpQGx5c8cSOaalb1VmlQ"
}, {
    name: "Daste",
    youtube: "https://www.youtube.com/channel/UCI-FwGLrDb7j1VuK9pXeN_g",
    twitter: "https://twitter.com/DasteYT"
}, {
    name: "Vyle",
    youtube: "https://www.youtube.com/user/RenzChannel"
}, {
    name: "XPozer",
    youtube: "https://www.youtube.com/channel/UCrjiEKr4Sv6fl4lHrTbqUfA",
    instagram: "https://www.instagram.com/_xpozer_",
    twitter: "https://twitter.com/YtberJs"
}, {
    name: "JC Laurence",
    description: "i just want to get 2500 subs",
    youtube: "https://www.youtube.com/channel/UCko3Zd5Bt-06gfTllUDPpSA"
}, {
    name: "IvanIO",
    description: "I'm 13 years old, and making Gaming content",
    youtube: "https://www.youtube.com/channel/UCT2ryU039C77JULQGBN1tuQ"
}, {
    name: "Hola, soy Bradley Time",
    youtube: "https://www.youtube.com/channel/UC1M1bWAq7yTIW8y1HXzFlIw"
}, {
    name: "Pro Gamer Player",
    youtube: "https://www.youtube.com/c/ProGamerPlayerSW-YTB",
    twitter: "https://twitter.com/ProGamerPIayer"
}, {
    name: "PROUDCaleb09-austria-hungary",
    description: "I make YouTube videos I love to watch the Corona virus counters",
    youtube: "https://www.youtube.com/channel/UCxx4zaoQpGXgpPgoCnwrmLw"
}, {
    name: "JJ Reed",
    description: "Gaming channel, I have good content.",
    youtube: "https://www.youtube.com/channel/UCR1F19sKEed7d5J0rAOKF5Q"
}, {
    name: "Yamil Videos",
    description: "I want people to find my content and maybe enjoy it. As I don't have much of an audience to work with.",
    youtube: "https://www.youtube.com/channel/UCElBQAXeOIarbkgeAt8TOPw"
}, {
    name: "Supreme Ant",
    description: "I am a bar graph youtuber",
    youtube: "https://www.youtube.com/channel/UCd2WR6tqqo6X_cVtRAHg2lA"
}, {
    name: "Chrispy",
    description: "i'm a small youtuber and i got here from sw and yt battles im a big fan of those 2. but yeah thats basically it",
    youtube: "https://www.youtube.com/channel/UCUu_ZM5wdV3tTcec9QVuWAg"
}, {
    name: "LongGM",
    youtube: "https://www.youtube.com/channel/UCvmonOo4_swlcshscHWnsvQ",
    twitter: "https://twitter.com/LonggmV",
    facebook: "https://www.facebook.com/long.gm.27",
    twitch: "https://www.twitch.tv/longgm_vn"
}, {
    name: "NupoK Hostory",
    youtube: "https://www.youtube.com/channel/UCEnpiAWYucTXRjJSXBqG4tw"
}, {
    name: "DitIsMick",
    youtube: "https://www.youtube.com/channel/UC7_8v02UqOaijUh0fVlb_rQ"
}, {
    name: "UniverseNerd"
    description:i just want 100 subs because im losing my subscriber rates ive gained zero in the last 30 days and i usually gain 3 a month
    youtube:"https://www.youtube.com/channel/UChxEm_iAodi_6ri6_zlqUdw"
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
