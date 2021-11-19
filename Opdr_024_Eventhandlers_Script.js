//Part 1
const buttonAlert = document.getElementById("mybutton");

buttonAlert.addEventListener("click", function(buttonClicked) {
    alert("Button clicked");
});

//Part 2
const buttonBlue = document.getElementById("mybutton-blue-background")

/*Deze code is niet meer nodig voor Part 3
buttonBlue.addEventListener("click", function(makeButtonRed) {
    buttonBlue.style.backgroundColor = "red";
    buttonBlue.className.add("red-background")
}); */

//Part 3
const buttonToggle = function (buttonToggle) {
    buttonBlue.classList.toggle("red-background"); //als class bestaat, haal dan weg <> als class niet bestaat, voeg dan toe
};
buttonBlue.addEventListener("click", buttonToggle);
