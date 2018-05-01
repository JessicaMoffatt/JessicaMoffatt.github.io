$(document).ready(function(){
	$('#resume_link').hover(resumeIn, resumeOut);
	$('#portfolio_link').hover(portfolioIn, portfolioOut);
	$('#menu_img').click(function(){
		if($('#menu_selection').is(":hidden")){
			$('#menu_selection').fadeIn(100);
		}else{
			$('#menu_selection').fadeOut(100);
		}	
	});
	$(document).click(function(e){
		if($(e.target).closest('#menu_img').length === 0){
			$('#menu_selection').fadeOut(100);
		}
	});
	
	function resumeIn(){
		$('#main_img').attr("src","photos/main_resume.jpg")
	}
	
	function resumeOut(){
		$('#main_img').attr("src","photos/main.jpg");
	}	
	
	function portfolioIn(){
		$('#main_img').attr("src","photos/main_portfolio.jpg")
	}
	
	function portfolioOut(){
		$('#main_img').attr("src","photos/main.jpg");
	}
});