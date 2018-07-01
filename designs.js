//select color input
//select size input

var height, width, color;

//when size is submitted by the user, then call makeGrid()

$('#sizePicker').submit(function(event)
{
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
	return false;
});

function makeGrid(x, y)
{
	$('tr').remove();

	//let your code goes here!!!
	code = "";
	for(var i = 1; i <= x; i++)
	{
		code += "<tr>";
		for(var j = 1; j <= y; j++)
		{
			code += "<td></td>";
		}
		code += "</tr>";
	}
	$("table").html(code);
	$("table").css({
		"width": 20 * y + "px",
		"height": 20 * x + "px"
	})
	//assigning color to each of the box
}

$(document).on("click","td",function(){

	$(this).css("background",$("#colorPicker").val());
})