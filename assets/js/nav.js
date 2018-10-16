$(document).ready( function(){
	
	// $('#container').load('home.html').hide().fadeIn('slow');
	$("#container").hide();
	$("#container").load("home.html", function(){
            $(this).fadeIn();
    });
	$('#lanjutan').hide();
	$('#aboutMe1').addClass('clicklink');
	
	$('#home').click(function(){
		$("#container").hide();
		$('#container').load("home.html", function(){
            $(this).fadeIn();
    });
		$('#lanjutan').hide();
		$('#turunan').show();
		$('#aboutMe1').addClass('clicklink');
		$('#home').removeClass('clicklink');
	});

	$('#aboutMe1').click(function(){
		$("#container").hide();
		$('#container').load("aboutMe.html", function(){
            $(this).fadeIn();
    });
		$('#lanjutan').show();
		$('#turunan').hide();
		$('#home').addClass('clicklink');
		$('#aboutMe1').removeClass('clicklink');
	});

	$('#aboutMe2').click(function(){
		$("#container").hide();	
		$('#container').load("aboutMe.html", function(){
            $(this).fadeIn();
    });
		$('#lanjutan').show();
		$('#turunan').hide();
		$('#home').addClass('clicklink');
		$('#aboutMe1').removeClass('clicklink');
	});


});
