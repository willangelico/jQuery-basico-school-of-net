$(document).ready(function(){
	$("#title").html("Jquery - School of Net");
	$("#desc").html("Starting with Jquery");

	$('h2').css('color','red');

	$('button').click(function(){
		$(this).css('color','red');
	});

	var bird = $('#bird').html();
	$('#bird').html(bird + " in the sky");
	$('#bird').append(" today");
	$('.classBird').css('color','orange');
	$('.classBird:first').css('color','blue');
	$('.classBird:last').css('color','green');
	$('div').css('padding','10px');


	$("#click").click(function(){
		$(this).html('OK');
	});
	$("#dblclick").dblclick(function(){
		$(this).html('OK');
	});
	$("#mouseenter").mouseenter(function(){
		$(this).html('OK');
	});
	$("#mouseleave").mouseleave(function(){
		$(this).html('OK');
	});
	$("#keypress").keypress(function(){
		$('#eventKey').html($(this).val());
	});
	$("#keydown").keydown(function(){
		$('#eventKey').html($(this).val());
	});
	$('#keyup').keyup(function(){
		$('#eventKey').html($(this).val());
	});

	$("#title").addClass('header');
	$("#title").addClass('remove');
	$("#title").removeClass('remove');
	$("#desc").css({'font-size': '30px','color':'gray'});

	$("#append").prepend("<p>antes<p>");
	$("#append").append("<p>após<p>");

	$("#show").click(function(){
		$("#append").show();
	});
	$("#hide").click(function(){
		$("#append").hide();
	});
	$("#toggle").click(function(){
		$( "#append" ).toggle();	
	})

	$("#animate").click(function(){
		$("#txtAnimate").animate({
			fontSize : '40px'
		}, 2000,function(){
			$(this).css('background','white');
		});
	});


	$("#slideDown").click(function(){
		$('#txtSlide').slideDown();
	});

	$("#slideUp").click(function(){
		$('#txtSlide').slideUp();
	});

	$("#slideToggle").click(function(){
		$('#txtSlide').slideToggle();
	});


	$('form').submit(function(){
		var name 	= $(':input[name=name]').val();
		var email 	= $(':input[name=email]').val();
		var tel 	= $(':input[name=tel]').val();
		var term 	= $(':input[name=term]').is(':checked');

		var error = "";
		$('#errors').html("");

		if(name === ""){
			error += '<p>Fill in a name</p>';
		}

		if(email === ""){
			error += '<p>Fill in a email</p>';
		}
		if(tel === ""){
			error += '<p>Fill in a telephone</p>';
		}
		if(!term){
			error += '<p>Fill in a Term</p>';
		}

		if(error){
			$('#errors').html(error);
			return false;
		}
		
	});
	



	





});

