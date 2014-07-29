$(document).ready(function(){

	var i = 0; 
	var loop = function(){
    	while (i <= 100){ 
    		var item = '<li>' + i + '</li>';            
        	$('ul').append(item); 
        	i++;

    	}
	};

	loop();

});