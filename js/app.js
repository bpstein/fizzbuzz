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

	// You’ll need to write one named function that takes an integer as argument, and then counts from 1 to the argument value, substituting “fizz”, “buzz”, and “fizzbuzz” accordingly.
	// You’ll need to convert the value the user supplies from a string to a number. Remember that the value that you get from prompt() or the val() on your form will by default be a string. To convert this to an integer you can use the + operator to convert a string to an integer. For instance, if you had the string “22”, you could convert that to a number with +”22”.
	// Note that if you try to convert something like "this is a string" to an integer with +"this is a string", it will evaluate to NaN. Your app should ensure that the user supplied value does not evaluate to NaN. If it does, you should supply a message telling them they need to supply a number.
	// Optionally, you can also write code to ensure that the user has not supplied a decimal value. For an easy way to do this, check out this answer on Stack Overflow.

