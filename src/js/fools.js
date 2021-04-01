function showError(message) {
    if (message) errorText.innerText = message
    if (!document.querySelector("#menu").style.visibility || document.querySelector("#menu").style.visibility === "hidden") {
        document.querySelector(".background").style.display = "block";
        document.querySelector("#menu").style.visibility = "visible";
    } else {
        document.querySelector(".background").style.display = "none";
        document.querySelector("#menu").style.visibility = "hidden";
    }
}

console.log("Happy April Fools Day! The official name for this update is vApril.1 and not v4.2. This is ONLY meant to be an April Fools update and should NOT be taken seriously.")
