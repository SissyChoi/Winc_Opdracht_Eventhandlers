//Part 1
const buttonAlert = document.getElementById("mybutton");

buttonAlert.addEventListener("click", function(buttonClicked) {
    alert("Button clicked");
});

//Part 2
const buttonBlue = document.getElementById("mybutton-blue-background")

buttonBlue.addEventListener("click", function(makeButtonRed) {
    buttonBlue.style.backgroundColor = "red";
    buttonBlue.className.add("red-background")
});

//Part 3
const buttonToggle = function (buttonToggle) {
    buttonBlue.classList.toggle("red-background");
};
buttonBlue.addEventListener("click", buttonToggle);
