$(document).ready(function(){



	// AOS Instance
	AOS.init();

	//Navbar
	let nav_offset_top=$('#header').height()-600;

	function navbarFixed(){
		if($('#header').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();

				if(scroll >= nav_offset_top){
					$('#header  .navigation').addClass('topbar');
				}else{
					$('#header .navigation').removeClass('topbar');
				}
			});
		}
	}
	navbarFixed();

});