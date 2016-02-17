function addListItem() {
	var text = $('#new-todo').val();
	
	if (text==="")
	{ 
		confirm("Write what u are going to do") ;
	} 
	else 
	{
		$('ul').append('<li><input type=checkbox><label>' + text + '</label></li>');
		$('#new-todo').val('');
	}
};

//function done() {
//if checkbox.checked
//}

//function () {
//	$('#done').on('click', done);
//}

$(document).ready(function () {
    $('#add').on('click', addListItem);
 });
