$(document).ready(function() {
    var number = "";
    var operator = "";
    var number1 = "";
    
    // concatenate individual string numbers
    $(".numbers").click(function() {
	number = number + $(this).html();
	$("#display_out").html(number);
    });

    $(".operators").click(function() {
	operator = $(this).html();
	number1 = number;
	number = "";
    });

    $(".clear").click(function() {
        number = "";
	number1 = "";
	$("#display_out").html("0");
    });

    // let operators do their thing on numbers and not as strings
    $(".equals").click(function() {
	if (operator === "+") {
	    number = Number(number1) + Number(number);
	} else if (operator === "-") {
	    number = Number(number1) - Number(number);
	} else if (operator == "x") {
	    number = Number(number1) * Number(number);
	} else if (operator == "/") {
	    number = Number(number1) / Number(number);
	}

	// if a decimal number then round to 2 decimal places
	if (number % 1 != 0) {
            number = number.toFixed(2);
	}

	if (number == "NaN") {
	    number = "0";
    	}

	$("#display_out").html(number);
	number = "";
    });
});
