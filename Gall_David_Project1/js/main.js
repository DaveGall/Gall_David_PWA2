/*  
	Your Project Title
	Author: You
*/

(function($){
	

	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
/* Pop Up window button styling, overlay styling and image hover styling */
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
/* End Pop Up window button styling, overlay styling and image hover styling */
/* Styling for the table */
    $("tbody tr:even").addClass("even");
	$("tbody tr:odd").addClass("odd");    /*These two lines add alternating colors to the rows.*/

    $("table tbody tr").mouseover(function(){
        $(this).addClass("rowHighlight");
    });                                         /* These few lines of code create a hover effect on each row of my projects table */
    $("table tbody tr").mouseout(function(){
        $(this).removeClass("rowHighlight");
    });
/*End table styling*/
/* Styling for my tooltips */
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
/*End tooltips styling*/
/* Accordion styling for my tab section */
    $("#tab-box p").hide().eq(0).show();
    $("#tab-box p:not(:first)").hide();

    $("#tabs li").click(function(e){
        e.preventDefault();
        $("#tab-box p").hide();


    $("#tabs .current").removeClass("current");
        $(this).addClass("current");
        var clicked = $(this).find("a:first").attr("href");

        $("#tab-box " + clicked).slideDown("slow");
}).eq(0).addClass("current");

/* End accordion styling */




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




