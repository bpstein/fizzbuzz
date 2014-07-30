$(document).ready(function(){

	//Append user input to DOM
	var addNumber = function(item){
		$('ul').append( "<p>" + item + "</p>");
	};
	//Fizzbuzz function
	var fizzBuzz = function(getNumber) {
		if (getNumber >= 1 && getNumber <= 100) {
    		
    		//Count from 1 to argument value; increments of 1
    		for (var counter = 1; counter <= getNumber; counter++) {
    			
    			//If value is divisible by 15, return "Fizzbuzz"
    			if (counter % 3 === 0 && counter % 5 === 0) {
					$('ul').append('<li>FizzBuzz!</li>');
				}  

				//If value is divisible by 5, return "Buzz"
				else if (counter % 5 === 0) {
					$('ul').append('<li>Buzz!</li>');
				}  

				//If value is divisible by 3, return "Fizz"	
				else if (counter % 3 === 0) {
					$('ul').append('<li>Fizz!</li>');
				}  

				//Return number if none of fizz, buzz or fizzbuzz applies
				else {
	    			$('ul').append('<li>' + counter + '</li>');
				}
			}
		}

		else {
			alert("Input an integer between 1 and 100.")
		};
	};

	
	//TO DO:
	// //Allow user input on enter key
	// $('body').on('keydown','#input', function(event) {
 //        if( event.which == 13) {
	// 	 	getNumber();
 //    }

 	//TO DO: 
 	//Restrict user input if decimal (i.e. not an integer)

 	//TO DO: 
 	//Restrict NaN and other errors (if any)

 	//TO DO: 
 	//Add a "start over" button/functionality


	//Allow user input on mouse click
	$('#submit').on('click', function() {
		var getNumber = +$('#input').val();

	//Reset the counted list
	$('#list').empty();
		fizzBuzz(getNumber);
		$('#input').val("");
		getNumber = "";
	});
});

