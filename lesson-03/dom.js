// DOM Element
const demo = document.getElementById("demo");
const squares = document.getElementsByClassName("square");

// DOM HTML
demo.innerText = "Học Javascript thật thú vị!";

// DOM CSS
demo.style.fontFamily = "Cambria";
demo.style.fontSize = "2em";
demo.style.color = "red";
demo.style.backgroundColor = "yellow";
for (const square of squares) {
	square.classList.add("square-red");
}

// DOM Document
const button = document.createElement("button");
button.innerText = "Click here";
document.body.appendChild(button);

// DOM Event
button.onclick = function () {
	window.alert("Bạn đã đủ 18 tuổi.");
};
