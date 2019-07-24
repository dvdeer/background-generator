var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndButton = document.querySelector(".random");
var defaultGradient = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";


let randomizeBackground = () => {
    var randomHEX =
        "#" + Math.floor(Math.random() * 99)
        + Math.floor(Math.random() * 99)
        + Math.floor(Math.random() * 99);
    color1.value = randomHEX;
    randomHEX = 
        "#" + Math.floor(Math.random() * 99)
        + Math.floor(Math.random() * 99)
        + Math.floor(Math.random() * 99);
    color2.value = randomHEX;
    console.log(color1.value, color2.value);
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
}

let setGradient = () => {
    var linearGradient = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    body.style.background = linearGradient;

    css.textContent = body.style.background + ";";
}


body.style.background = defaultGradient;
css.textContent = defaultGradient;

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
rndButton.addEventListener("click", randomizeBackground)