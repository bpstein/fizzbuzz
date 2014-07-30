$(document).ready(function(){

	var fizz = '<li>' + 'Fizz' + '</li>';
	var buzz = '<li>' + 'Buzz' + '</li>';
	var fizzBuzz = '<li>' + 'FizzBuzz' + '</li>';
	var item = '<li>' + i + '</li>'; 


	for (var i=1; i <= 100; i++) {
	    if (i % 15 == 0)
			$('ul').append(fizzBuzz);

		else if (i % 5 == 0)
	        $('ul').append(buzz);

	    else if (i % 3 == 0)
			$('ul').append(fizz);
			    
		else
	        $('ul').append('<li>' + i + '</li>');
	           
	}	
});

