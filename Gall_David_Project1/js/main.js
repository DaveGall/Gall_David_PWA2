/*  
	Your Project Title
	Author: You
*/

(function($){
	

	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
    $(".modalClick").on("click", function(event){
       event.preventDefault();
        $("#overlay")
            .fadeIn()
            .find("#modal")
            .fadeIn();
    });
    $(".close").on("click", function(event){
       event.preventDefault();
        $("#overlay").fadeOut().find("#modal").fadeOut();
    });

    $(".myStatus").mouseover(function(){
        $(this).fadeTo(100,.5);
    });
    $(".myStatus").mouseout(function(){
       $(this).fadeTo(100, 1);
    });

    $("tbody tr:even").addClass("even");
	$("tbody tr:odd").addClass("odd");

    $(".masterTooltip").hover(function(){
        var title = $(this).attr("title");
        $(this).data("tipText", title).removeAttr("title");
        $('<p class="tooltip"></p>').text(title).appendTo("body").fadeIn("fast");
    }, function(){
        $(this).attr("title", $(this).data("tipText"));
        $(".tooltip").remove();
    }).mousemove(function(e){
        var mouseX = e.pageX + 20;
        var mouseY = e.pageY + 10;
        $(".tooltip").css({top: mouseY, left: mouseX})
    });



    var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};


	
	

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
		
	/*
	===============================================
	======================================== EVENTS	
	*/
	
	
	/*	
	==================================== END EVENTS 
	===============================================
	*/




})(jQuery); // end private scope




