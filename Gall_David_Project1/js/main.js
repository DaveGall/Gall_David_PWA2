/*  
	Your Project Title
	Author: You
*/

(function($){

    $(document).ready( function () {
        $('table').DataTable();
    } );



	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
/* Pop Up window button styling, overlay styling and image hover styling */
    $(".modalClick").on("click", function(event){  /* Begins the function that tells the computer to find class modalClick and listen for a click */
       event.preventDefault();  /* This prevents the computer from doing what it would normally so that it will perform what we want it to. */
        $("#overlay")/* These next 4 lines are set to look for the id with overlay and have it fade in and then look for the id with modal and fade that in next. */
            .fadeIn()
            .find("#modal")
            .fadeIn();
    });
    $(".close").on("click", function(event){   /* This function will listen for a click on the close class */
       event.preventDefault();   /* This prevents the computer from performing the default action it would normally perform and just do what you ask it to. */
        $("#overlay").fadeOut().find("#modal").fadeOut();  /* This grabs the id with overlay and fades it out and then looks for the id of modal and fades it out next. */
    });

    $(".myStatus").mouseover(function(){  /* These two lines of this function listen for a mouse over event and then fade the element with myClass to 50% transparency */
        $(this).fadeTo(100,.5);
    });
    $(".myStatus").mouseout(function(){  /* These two lines of this function listen for a mouse out event on the myStatus class and then fade the color back to 100% transparency. */
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
    $(".masterTooltip").hover(function(){  /* Starts the function that will tell the computer what to do when any element with a class of masterTooltip is hovered over/ */
        var title = $(this).attr("title");   /* This sets a variable for the result of this and grabs the title attribute */
        $(this).data("tipText", title).removeAttr("title");   /* This grabs the data from the variable title and removes the word title, leaving just what you typed */
        $('<p class="tooltip"></p>').text(title).appendTo("body").fadeIn("fast"); /* This line appends it to the body of the page and allows it to fadeIn from its hidden state. */
    }, function(){
        $(this).attr("title", $(this).data("tipText"));/* This function will remove the tooltip class when moved. */
        $(".tooltip").remove();
    }).mousemove(function(e){  /* This function will set where the css style sits on the screen. Here it is set to be 20px right and 10px up from the pointer */
        var mouseX = e.pageX + 20;  /* These are the variables that will be used to call up the position of the box in relation to the mouse. */
        var mouseY = e.pageY + 10;
        $(".tooltip").css({top: mouseY, left: mouseX}); /* This is grabbing the class of tooltip and using the css set up for it and the position using the variables that were set up earlier. */
    });
/*End tooltips styling*/
/* Accordion styling for my tab section */
    $("#tab-box p").hide().eq(0).show(); /*  */
    $("#tab-box p:not(:first)").hide();  /* This tells the computer to hide all of the paragraphs in the id of tab-box except the first one */

    $("#tabs li").click(function(e){  /* This function tells the computer to listen for a click event on the li's in the tabs id */
        e.preventDefault();  /* This prevents the computer from performing the action it would normally perform and only do what the code tells it to do. */
        $("#tab-box p").hide(); /* This will hide all the paragraphs */


    $("#tabs .current").removeClass("current"); /* This removes the class of current from the tab id that has it */
        $(this).addClass("current"); /* This will add the class of current to the li that was clicked */
        var clicked = $(this).find("a:first").attr("href"); /* This variable is being set up to find the first link with the attribute of href */

        $("#tab-box " + clicked).slideDown("slow"); /* This uses the variable and matches it to the paragraph and then slides it down into view from its hidden state. */
}).eq(0).addClass("current"); /* This will add the class of current to the current li that has been clicked */

    <!-- Start table styling -->

    var table = $('#example').DataTable();

    table.columns().flatten().each( function ( colIdx ) {
        // Create the select list and search operation
        var select = $('<select />')
            .appendTo(
            table.column(colIdx).footer()
        )
            .on( 'change', function () {
                table
                    .column( colIdx )
                    .search( $(this).val() )
                    .draw();
            } );

        // Get the search data for the first column and add to the select list
        table
            .column( colIdx )
            .cache( 'search' )
            .sort()
            .unique()
            .each( function ( d ) {
                select.append( $('<option value="'+d+'">'+d+'</option>') );
            } );
    } );<!-- End of table code -->


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

    $('#enter').click(function(){
       var user= $('#username').val();
       var pass = $('#password').val();

        $.ajax({
            url: 'xhr/login.php',
            type: 'post',
            dataType: 'json',
            data: {
                username: user,
                password: pass
            },
            success: function(response){
                if(response.error){
                    alert(response.error);
                }else{
                    window.location.assign('projects.html')
                }
            }
        })
    });
	
	/*	
	==================================== END EVENTS 
	===============================================
	*/




})(jQuery); // end private scope




