function addListItem() {
//	if(typeof(Storage) !== "undefined") {
	var text = $('#new-todo').val();
	if (text==="")
	{ 
		confirm("Write what u are going to do") ;
	} 
	else 
	{
		$('ul').prepend('<li class='+ countLi +'><input class='+ countLi +' type=checkbox><label contenteditable="true">' + text + '</label></li>');
		$('#new-todo').val('');
		countLi+=1;
	}
	/* var todos = $('.lal').html();
        localStorage.setItem('lal', todos);
	} else {
    // No Web Storage support..
	}*/
};

function clearAll() {
	$('li').remove();
	countLi=0;
}


function clearChecked() {
	 
	for (i = 0; i < countLi; i++) 
	{
		if ($("input." + i + ":checkbox").prop("checked")==true) {
			$("li").filter("."+i).remove();
		}
	}
	

}

function selectAll() {
	$(':checkbox').attr('checked',true);
}

$(document).ready(function () {
	var countLi = $('ul.list li').size();
	$('input').on('keypress',(function (e) {
                if (e.which == 13) {
                    addListItem();
                }
            })
     );
    $('#add').on('click', addListItem);
    $("#clearAll").on('click', clearAll);
 	$("#clearChecked").on('click',clearChecked);
	$("#selectAll").on('click',selectAll);
	/*if (localStorage.getItem('todos')) {
        $('#todos').html(localStorage.getItem('todos'));
    }*/
});





