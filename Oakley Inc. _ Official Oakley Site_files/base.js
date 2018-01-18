$(document).ready(function() {
	// Add class to body to identify device

  if(jQuery.browser.mobile){
    $("body").addClass('isMobile');
  }else{
    $("body").addClass('isDesktop');
  }




});