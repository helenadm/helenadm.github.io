
$(document).ready(function(){
	$('.myButton').click(function(event){
		event.preventDefault()
		console.log('preventDefault');
		
		var target = $(event.target)
		console.log('event')
		
		$('body').removeClass()
		console.log ('remove body')

		var id = target.attr('id')
		console.log(id)
		
		if (target.attr('id') == 'myButton1'){
			$('body').addClass('picture1');
			alert ('you have click "Click me!" ');
			console.log('id1')
		}
		if (target.attr('id') == 'myButton2'){
			$('body').addClass('picture2');
			
			Messenger().post({
				message: 'well done',
				type: 'success',
				showCloseButton: true
			});
			console.log('id2')

		}
		if (target.attr('id') == 'myButton3'){
			$('body').addClass('picture3');
			console.log('id3')

			
		}



		function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }}

})

});