let currentTab = document.getElementsByClassName("content")[0].id
let tabs = [];
const months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var c = document.getElementsByClassName("content")
for (i = 0; i < c.length; i++) {
    c[i].style.display = 'none'
    tabs.push(c[i].id)
}
function openTab(e, tab) {
    var i, tc, tl;
    tc = document.getElementsByClassName("content")
    for (i = 0; i < tc.length; i++) {
        tc[i].style.display = 'none'
    }
    tl = document.getElementsByClassName("tab-link")
    for (i = 0; i < tl.length; i++) {
        tl[i].className = tl[i].className.replace(" active", "")
    }
    document.getElementById(tab).style.display = 'block'
    e.currentTarget.className += ' active'
    currentTab = tab
}
document.querySelector("#defaultTab").click()

document.addEventListener("keydown", navigate)

function navigate(e) {
    const tc = document.getElementsByClassName("content");
    if (e.repeat) return;
    if (e.key === "ArrowUp") {
        if (tabs.indexOf(currentTab)) {
            openTab(event, tabs[tabs.indexOf(currentTab) - 1])
        }
    }
    if (e.key === "ArrowDown") {
        if (tabs.indexOf(currentTab) < tabs.length - 1) {
            openTab(event, tabs[tabs.indexOf(currentTab) + 1])
        }
    }
}
var d = document.getElementsByClassName("date")
for (i = 0; i < d.length; i++) {
    const date = new Date(d[i].getAttribute("ts"))
    d[i].innerText = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

var q = document.getElementsByClassName("question")
for (j = 0; j < q.length; j++) {
    q[j].addEventListener("click", function() {
        this.classList.toggle("active");
        var n = this.nextElementSibling;
        if (n.style.maxHeight){
          n.style.maxHeight = null;
        } else {
          n.style.maxHeight = n.scrollHeight + "px";
          console.log(n.scrollHeight)
        }
      });
}
