/*var hoverMenu = $(".hidden-menu"),
    hoverSpace = $(".site-header");

hoverSpace.on('mousemove', function(event) {
    if(35 - event.clientY < 0) {
        hoverMenu.css({top: 35 - event.clientY});
    } else {
        hoverMenu.css({top: 0});
    }
}).on('mouseout', function() {
    hoverMenu.css({top: -35});
});*/

/*$(document).mousemove(function(e){
  var vertical = e.pageY;

  if(vertical <= 2 && !$(".hidden-menu").is(":visible")) {      
    $(".hidden-menu").css("top","0").fadeIn();
  } else {
    $(".hidden-menu").css("top","-270px");
  }
});*/

// 메뉴 전체보기
/*	$(".hidden-menu").css('display', 'none');


	$(".hidden-menu").hover(function(){
		if($("#slidehid").val() == "up"){
			$(".hidden-menu").slideDown("500");
		}
	}, function(){
		$("#slidehid").val("down");
		$(".hidden-menu").slideUp("500",function (){
			$("#slidehid").val("up");
		});

	});

	$(".menuClose").click(function(){
		$(".hidden-menu").slideUp("500");
	});
*/