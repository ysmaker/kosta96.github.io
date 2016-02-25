function addListItem() {
	var text = $('#new-todo').val();
	if (text==="")
	{ 
		confirm("Write what u are going to do") ;
	} 
	else 
	{
		$('ul').append('<li><input type=checkbox><label contenteditable="true">' + text + '</label></li>');

		$('#new-todo').val('');
	}
};

/*function clearChecked(){
	$('input').remove(input:checked);
}*/

function clearAll() {
	$('li').remove();
}
   
  

$(document).ready(function () {
    $('#add').on('click', addListItem);
    $("#clearAll").on('click', clearAll);
 	 input.focus;
 	 input.keypress(function (e) {
                if (e.which == 13) {
                    addListItem();
                }
            });
   // $('#clearChecked').on('click',clearChecked);
 });


