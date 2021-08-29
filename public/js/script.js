console.log("hi!")




var button = document.createElement("button");
button.innerHTML = "Link to Discord";
button.id = "button"

var body = document.getElementById("body")
body.appendChild(button);

button.addEventListener("click", account_info);

button.blur = true // why does this not work ;-;

function account_info() {
    window.location.replace("https://discord.com/api/oauth2/authorize?client_id=881453537396129792&redirect_uri=https%3A%2F%2Fboundlessocean.tech%2F&response_type=code&scope=email")
}


document.getElementById("main-canvas").blur();
