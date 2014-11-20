/*  
	Your Project Title
	Author: You
*//*  Project by David Gall  */

(function($){





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

    $(" .myStatus ").mouseover(function(){  /* These two lines of this function listen for a mouse over event and then fade the element with myClass to 50% transparency */
        $(this).fadeTo(100,.5);
    });
    $(" .myStatus ").mouseout(function(){  /* These two lines of this function listen for a mouse out event on the myStatus class and then fade the color back to 100% transparency. */
       $(this).fadeTo(100, 1);
    });
/* End Pop Up window button styling, overlay styling and image hover styling */
/* Styling for the table */


    $("tbody tr.sim").on('mouseover', function(){
        $(this).css("background-color", "#ffd55d");
    });                                         /* These few lines of code create a hover effect on each row of my projects table */
    $("table tbody tr.sim").mouseout(function(){
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
    $(" #tab-box p ").hide().eq(0).show(); /*  */
    $(" #tab-box p:not(:first) ").hide();  /* This tells the computer to hide all of the paragraphs in the id of tab-box except the first one */

    $(" #tabs li ").click(function(e){  /* This function tells the computer to listen for a click event on the li's in the tabs id */
        e.preventDefault();  /* This prevents the computer from performing the action it would normally perform and only do what the code tells it to do. */
        $(" #tab-box p ").hide(); /* This will hide all the paragraphs */


    $(" #tabs .current ").removeClass("current"); /* This removes the class of current from the tab id that has it */
        $(this).addClass("current"); /* This will add the class of current to the li that was clicked */
        var clicked = $(this).find("a:first").attr("href"); /* This variable is being set up to find the first link with the attribute of href */

        $("#tab-box " + clicked).slideDown("slow"); /* This uses the variable and matches it to the paragraph and then slides it down into view from its hidden state. */
}).eq(0).addClass("current"); /* This will add the class of current to the current li that has been clicked */




/* End accordion styling */




   /* var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};*/


	
	

	// 	============================================
	//	SETUP FOR INIT
		
	/*var init = function(){
	
		checkLoginState();
	};
	
	
	init();*/
	
		
	/*
	===============================================
	======================================== EVENTS	
	*//* Log In Formatting */
	$('#enter').click(function(){
       var user= $('#username').val();
       var pass = $('#password').val();
console.log("The password is working");
        $.ajax({
            url: 'xhr/login.php',
            type: 'post',
            dataType: 'json',
            data: {
                username: user,
                password: pass
            },
            success:function(response){
                console.log("Test User");
                if(response.error){
                    alert(response.error);
                }else{
                    window.location.assign('Welcome.html');
                }
            }
        })
    });

    /* End Log In formatting */

    /* Log Out code */
    $('#logOut').click(function(e){
        e.preventDefault();
        $.get('xhr/logout.php', function(){
            window.location.assign('index.html');
        })
    });
    /* End Log Out formatting */

    /*Start formatting to get back to the dashboard*/
/* This little section will get you back to your dashboard from the projects page */
    $('#dashboard').click(function(e){
        e.preventDefault();
        window.location.assign('Welcome.html');
    });
    /*End formatting for the dashboard button*/

    /* Start formatting for sign up button */

    $('#cta-signUp').click(function(e){
        e.preventDefault();
        window.location.assign('signup.html');
    });

    /* End formatting for sign up button */

    /* Begin formatting for my projects button */

    $('.projects').click(function(e){
        e.preventDefault();
        window.location.assign('projects.html');
    });

    /* End formatting for my projects button */
    
    /* Start formatting for date picker */
    
    $('.myDatePicker').datepicker();
    
    /* End Formatting for date picker */

    /* Start formatting for accordion menu */

    $('#expandableMenu').accordion();

    /* End formatting for accordion menu */

    $('#account').click(function(e){
        e.preventDefault();
        window.location.assign('update.html');
    });

/* Start formatting for rotating images */


setInterval(rotateImages, 2000);


    function rotateImages(){
        var curPhoto = $(' #gallery div.current ');
        var nxtPhoto = curPhoto.next();
        if(nxtPhoto.length == 0)
        nxtPhoto = $(' #gallery div:first ');

        curPhoto.removeClass('current').addClass('previous');
        nxtPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 1000,
        function(){
            curPhoto.removeClass('previous');

        });


}

    /* End formatting for rotating images */

    /* Begin Sign Up Formatting */

    $('#submit').on('click', function(){
       var firstname =$('#fName').val(),
           lastname = $('#lName').val(),
           username = $('#username').val(),
           email = $('#email').val(),
           password = $('#password').val();
           console.log(firstname+" "+lastname+" "+username+" "+password+" "+email);

        $.ajax({
            url: 'xhr/register.php',
            type: 'post',
            dataType: 'json',
            data: {
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password
            },

            success: function(response){
                if(response.error){
                    alert(response.error);
                }else{
                    window.location.assign('index.html');
                }
            }
        })
    });

    /* End Sign UP Formatting */

    /* Start display username formatting */

    $.getJSON("xhr/check_login.php", function(data){
       console.log(data);

        $.each(data, function(key, val){
            console.log(val.first_name);
            $('.userId').html("<h3>Welcome: "+val.first_name+"</h3>");
        })
    });

    /* End display name formatting */

    /* Start formatting for adding new projects */

    $('#addButton').on('click', function(){
        var projName = $('#projectName').val(),
            projDesc = $('#projectDescription').val(),
            projDue = $('#projectDueDate').val(),
            projImage = $('#img').val(),
            status = $('input[name = "status"]:checked').prop("id");

        $.ajax({
            url: 'xhr/new_project.php',
            type: 'post',
            dataType: 'json',
            data: {
                projectName: projName,
                projectDescription: projDesc,
                dueDate: projDue,
                updatedDate: projImage,
                status: status
            },
            success: function(response){
                console.log(projDue);
                if(response.error){
                    alert(response.error);
                }else {
                    window.location.assign('projects.html');
                }
            }
        })
    });


    /* End adding new projects formatting */
    /* Start sortable formatting */



    $('#sortable').sortable();

    $('#sortable').disableSelection();




    /* End sortable formatting */


    /* Start formatting for getting projects */

    var projects = function(){

        $.ajax({
            url: 'xhr/get_projects.php',
            type: 'get',
            dataType: 'json',
            success: function(response){
                if(response.error){
                    console.log(response.error);
                }else {

                    for(var i= 0, j=response.projects.length; i<j; i++){
                        var result = response.projects[i];

                        $('.projectList').append(
                                "<div id='sortable' class='sim'>"+"<div id='image'>"+"<img src='"+result.updatedDate+"' class='proImages'/>"+"</div>"+
                                "<input class='projectid' type='hidden' value='"+result.id+"'>"+
                                "<div id='name'> "+result.projectName+"</div>"+
                                "<div id='desc'> "+result.projectDescription+"</div>"+
                                "<div id='status'> "+result.status+"</div>"+
                                "<div id='date'>"+result.dueDate+"</div>"+"<div id='proButtons'>"+
                                '<input name="edit" type="button" class="edit" value="Edit">'+'<input id="opener" proID="' + result.id +'" name="delete" type="button" class="delete" value="Delete">'+'<input name="view" type="button" class="view" value="View">'+"</div>"+'</div>'
                        );


                    }

                    $('.delete').on('click', function(e){
                        console.log(result.id);
                        e.preventDefault();
                        var eyeD= $(this).attr('proID');
                        console.log("This is the new trial id: "+eyeD);
                        $.ajax({
                            url: 'xhr/delete_project.php',
                            data: {
                                projectID: eyeD
                            },
                            type: 'POST',
                            dataType: 'json',
                            success: function(response){
                                console.log('test for success.');
                                if(response.error){
                                    alert(response.error);
                                }else {
                                    window.location.assign('projects.html');
                                }
                            }
                        })
                    })
                }
            }
        })

    };
projects();
    /* End formatting for getting projects */

    var updateAcct = function(){

        $.ajax({
            url: 'xhr/get_user.php',
            type: 'get',
            dataType: 'json',
            success: function(response){
                if(response.error){
                    alert(response.error);
                }else {
                    var updatefirstname = response.user.first_name;
                    var updatelastname = response.user.last_name;
                    var updateemail = response.user.email;
                    var accountPic = response.user.avatar;
                    $('#updatefirstname').val(updatefirstname);
                    $('#updatelastname').val(updatelastname);
                    $('#updateemail').val(updateemail);
                    $('#accountPic').val(accountPic);

                    $('#imageAvatar').append(
                        "<img src='"+accountPic+"' class='proImages'/>"
                    );
                }
            }
        })
    };

    $('#updateButton').on('click', function(e){
        e.preventDefault();
        var changedfirstname = $('#updatefirstname').val();
        var changedlastname = $('#updatelastname').val();
        var changedemail = $('#updateemail').val();
        var changedAccountPic = $('#accountPic').val();

        $.ajax({
            url: 'xhr/update_user.php',
            type: 'post',
            dataType: 'json',
            data: {
                first_name: changedfirstname,
                last_name: changedlastname,
                email: changedemail,
                avatar: changedAccountPic
            },
            success: function(response){
                if(response.error){
                    alert(response.error)
                }else {


                    alert("Account Updated");
                }
            }
        })
    });
    updateAcct();


/*Start Weather formatting*/

    $('#weather').click(function(e){
        e.preventDefault();
        var getState = $('#state').val();
        var getCity = $('#city').val();
        $.ajax({

            url : "http://api.wunderground.com/api/fea5f7c6081ec410/geolookup/conditions/q/"+getState+"/"+getCity+".json",
            dataType : "jsonp",
            success : function(parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];

                $('#results').append(
                        "<p>"+"The Temperature in "+location+" is: "+ temp_f+"ºF</p>"
                );



            }
        });
    });


/*End Weather formatting*/

    /* Start formatting for updating user accounts */
    /* End formatting for updating accounts */
	/*	
	==================================== END EVENTS 
	===============================================
	*/




})(jQuery); // end private scope




