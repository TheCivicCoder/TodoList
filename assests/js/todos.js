//checkoff specific todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which=== 13){
		//grabbing text form input
		var todoText= $(this).val();
		$(this).val("");
		//creating new li element
		$("ul").append("<li><span><i class='fa fa-hand-scissors-o' aria-hidden='true'></i></span> "+ todoText +"</li");
	}
})

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});