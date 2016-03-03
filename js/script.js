var countLi = $('ul.list li').size();

function addListItem() {
	var text = $('#new-todo').val();
	if (text==="")
	{ 
		confirm("Write what u are going to do") ;
	} 
	else 
	{
		countLi+=1;
		$('ul').append('<li class='+ countLi +'><input class='+ countLi +' type=checkbox><label contenteditable="true">' + text + '</label></li>');
		$('#new-todo').val('');
	}
};

function clearAll() {
	$('li').remove();
	countLi=0;
}
/*
function clear5() {
	$('li.'+5).remove();
	countLi-1;
}
*/
function clearChecked() {
	for (i = 1; i < countLi; i++) 
	{
		if ($("input." + i + ":checkbox").prop("checked")==true) {
			$("li").filter("."+i).remove();
		}
	}
}

$(document).ready(function () {
    $('#add').on('click', addListItem);
    $("#clearAll").on('click', clearAll);
 	$("#clearChecked").on('click',clearChecked);
    });
//$("#clear5").on('click',clear5);



