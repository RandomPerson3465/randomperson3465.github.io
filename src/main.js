document.querySelector(".top-icons").innerHTML = '<span><a href="/"><i class="fa fa-home"></i></a> <span class="document-theme-changer"><i class="far fa-moon" onclick="setDarkTheme();"></i></span> <i class="fas fa-bars" onclick="openSidebar();"></i></i></i></span>';

document.querySelector(".sidebar-menu").innerHTML = `<div class="sidebar-close"><i class="fas fa-times" onclick="closeSidebar();"></i></div>
<br>
<div class="sidebar-content">
    <hr>
    <div><a href="/">Home</a></div>
    <div><a href="/about.html">About</a></div>
    <hr>
    <div><a href="/livecountsedit.html">Livecountsedit</a></div>
    <div><a href="/progress.html">Progress Bar</a></div>
    <div><a href="/rick_astley_mod.html">Rick Astley Mod</a></div>
    <hr>
    <div><a href="/roll.html">Don't Click This</a></div>
    <div><a href="https://github.com/RandomPerson3465/randomperson3465.github.io">Github</a></div>
    <div><a href="https://www.youtube.com/@randomperson-3465">YouTube</a></div>
    <div><a href="https://x.com/randomguy3465">Twitter/X</a></div>
    <hr>
</div>

</div>`

function setDarkTheme() {
    document.querySelector(".document-theme-css").href = "/src/dark.css";
    document.querySelector(".document-theme-changer").innerHTML = '<i class="far fa-sun" onclick="setLightTheme();"></i>';
    document.body.style.backgroundColor = "#222222"; // Prevent Disqus desync
    const event = new Event('themeChanged');
    document.dispatchEvent(event);
    localStorage.setItem("documentTheme", "1");
}

function setLightTheme() {
    document.querySelector(".document-theme-css").href = "/src/main.css";
    document.querySelector(".document-theme-changer").innerHTML = '<i class="far fa-moon" onclick="setDarkTheme();"></i>';
    document.body.style.backgroundColor = "#dddddd"; // Prevent Disqus desync
    const event = new Event('themeChanged');
    document.dispatchEvent(event);
    localStorage.setItem("documentTheme", "0");
}

function openSidebar() {
    document.querySelector(".sidebar-menu").style.width = "20vw";
}

function closeSidebar() {
    document.querySelector(".sidebar-menu").style.width = "0";
}

if (localStorage.getItem("documentTheme") === "1") {
    setDarkTheme();
}

if (document.querySelector(".footer-stuff-socials")) {
    document.querySelector(".footer-stuff-socials").innerHTML = '<a href="https://x.com/@randomguy3465"><i class="fab fa-twitter"></i> @randomguy3465</a> • <i class="fab fa-discord"></i> randomperson3465 • <a href="https://youtube.com/@randomperson-3465"><i class="fab fa-youtube"></i> @randomperson-3465</a>'
}

// Easter egg lol

if (document.querySelector("h1.title") && Math.random() < 1/3465) {
    document.querySelector("h1.title").innerText = "RandomPerson3456";
}