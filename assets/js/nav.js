$(document).ready( function(){
	
	
	$("#container").hide();
	$("#container").load("home.html", function(){
            $(this).fadeIn('slow');
    });
	$('#atas').hide();
	
	
	$('#home').click(function(){
		$("#container").hide();
		$('#container').load("home.html", function(){
            $(this).fadeIn('slow');
    });
		$('#atas').hide();
		$('#bawah').show();
		$('#home').removeClass('clicklink');
	});

	
	$('#aboutMe1').click(function(){
		$("#container").hide();
		$('#container').load("aboutMe.html", function(){
            $(this).fadeIn('slow');
    });
		$('#atas').show();
		$('#aboutMe2').show();
		$('#contact2').hide();
		$('#bawah').hide();
		$('#home').addClass('clicklink');
		
	});

	
	$('#aboutMe2').click(function(){
		$("#container").hide();	
		$('#container').load("aboutMe.html", function(){
            $(this).fadeIn('slow');
    });
		$('#atas').show();
		$('#aboutMe2').show();
		$('#contact2').hide();
		$('#bawah').hide();
		$('#home').addClass('clicklink');
	});

	$('#contact1').click(function(){
		$("#container").hide();	
		$('#container').load("contact.html", function(){
            $(this).fadeIn('slow');
    });
		$('#atas').show();
		$('#contact2').show();
		$('#aboutMe2').hide();
		$('#bawah').hide();
		$('#home').addClass('clicklink');
	});

	$('#contact2').click(function(){
		$("#container").hide();	
		$('#container').load("contact.html", function(){
            $(this).fadeIn('slow');
    });
		$('#atas').show();
		$('#contact2').show();
		$('#aboutMe2').hide();
		$('#bawah').hide();
		$('#home').addClass('clicklink');
	});
	


});
