
//Show all menu
$(".main_menu").css('display', 'none');

	$(".menu_min").hover(function(){
		if($("#hiddenMenu").val() == "up"){
			$(".main_menu").slideDown("500");
		}
	}, function(){
		$("#hiddenMenu").val("down");
		$(".main_menu").slideUp("500",function (){
			$("#hiddenMenu").val("up");
		});

	});

	$(".menuClose").click(function(){
		$(".main_menu").slideUp("500");
	});
