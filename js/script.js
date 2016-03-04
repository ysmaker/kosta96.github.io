var countLi = $('ul.list li').size();

function addListItem() {
	var text = $('#new-todo').val();
	if (text==="")
	{ 
		confirm("Write what u are going to do") ;
	} 
	else 
	{
		
		$('ul').append('<li class='+ countLi +'><input class='+ countLi +' type=checkbox><label contenteditable="true">' + text + '</label></li>');
		$('#new-todo').val('');
		countLi+=1;
	}
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
    });





