// DOM Element
const demo = $("#demo");
const squares = $(".square");

// DOM HTML
demo.text("Học Javascript thật thú vị!");

// DOM CSS
demo.css({
	fontFamily: "Cambria",
	fontSize: "2em",
	color: "red",
	backgroundColor: "yellow"
});
squares.addClass("square-red");

// Dom Document
const button = $("<button>");
button.text("Click here");
$("body").append(button);

// DOM Event
button.on("click", function () {
	window.alert("Bạn đã đủ 18 tuổi.");
});

// Ajax
const BASE_URL = "https://651173b9829fa0248e40178d.mockapi.io";
$.ajax({
	url: `${BASE_URL}/api/v1/cars`,
	method: "GET",
	success: function (data) {
		console.log(data);
	}
});
