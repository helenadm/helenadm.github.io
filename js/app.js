
$(document).ready(function(){
	$('.myButton').click(function(event){
		event.preventDefault()
		console.log('preventDefault');
		var target = $(event.target)
		console.log('event')
		$('#body').removeClass()
		console.log ('removeClass')		
	})
});