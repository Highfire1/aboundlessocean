console.log("hi!")




var button = document.createElement("button");
button.innerHTML = "Link to Discord";
button.id = "button"

var body = document.getElementById("body")
body.appendChild(button);

button.addEventListener("click", account_dia);

function account_dia() {
    alert("BUTTON!")
}