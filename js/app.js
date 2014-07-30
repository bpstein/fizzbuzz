$(document).ready(function(){

	//Allow user input on mouse click
	$('body').on('click', '#submit', function(){
		addNumber();
	});

	//Allow user input on enter key
	$('body').on('keydown','#input', function(event) {
      if( event.which == 13) {
		 addNumber();
      }
  	});

	// //declare variables to append to DOM
	// var fizz = '<li>' + 'Fizz' + '</li>';
	// var buzz = '<li>' + 'Buzz' + '</li>';
	// var fizzBuzz = '<li>' + 'FizzBuzz' + '</li>';
	// var item = '<li>' + i + '</li>'; 

	// //count from 1 to 100; increments of 1
	// for (var i=1; i <= 100; i++) {

	// 	//print "fizzbuzz" if increment is divisible by 15
	//     if (i % 15 == 0)
	// 		$('ul').append(fizzBuzz);

	// 	//print "buzz" if increment is divisible by 5
	// 	else if (i % 5 == 0)
	//         $('ul').append(buzz);

	//     //print "fizzbuzz" if increment is divisible by 3
	//     else if (i % 3 == 0)
	// 		$('ul').append(fizz);

	// 	//print if none of fizz, buzz or fizzbuzz applies
	// 	else
	//         $('ul').append('<li>' + i + '</li>');
	           
	// }	

	//Append user input to DOM
	function addNumber(){
		var number = '<li>' + $('#input').val() + '</li>';
		$('#list').append(number);
	}
});

