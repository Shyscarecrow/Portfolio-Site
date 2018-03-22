$(document).ready(function() {
var color, height, width;
color = "black";
$("#colorPicker").on("change", function() {
	color = $(this).val();
});

$("#input_height").on("change", function() {
	height = $(this).val();
});

$("#input_width").on("change", function() {
	width = $(this).val();
});

$("#start").on("click", function makeGrid(e) {
	
	for (var i = 1; i <= height; i++) {
		$("table").append("<tr></tr>");
	};
	for (var j = 1; j <= width; j++) {
		$("tr").append("<td></td>");
	};
	$("td").click(function(){
		$(this).css("background-color", color);
	});
	$("td").dblclick(function(){
		$(this).css("background-color", "white");
	});
});
$("#reset").on("click", function(){
		$("#input_height").val(1);
		$("#input_width").val(1);
		$("tr").remove();
		height = 1;
		width = 1;

});
});





