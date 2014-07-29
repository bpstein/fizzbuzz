$(document).ready(function(){

	var i = 0; 
	var fizz = i % 3;
	var buzz = i % 5;
	var fizzBuzz = i % 15;

	var loop = function(){
    	while (i <= 100){ 
    		var item = '<li>' + i + '</li>';            
        	$('ul').append(item); 
        	i++;

    	}
	};

	loop();

});



if (fizz = 0) {
    
    console.log("Fizz")

    }

else if (buzz = 0) {
    
    console.log("Buzz")
    
    }

else if (fizzBuzz = 0) {
    
    console.log("FizzBuzz")
    
    }

else {
	console.log("i")
}
