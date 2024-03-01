const display = document.getElementById('result');
const buttons = document.querySelectorAll('td');
	 	

  document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const calculatorTable = document.getElementById('calculator-table');
	console.log('flag 1');
    calculatorTable.addEventListener('click', function(event) {
      if (event.target.tagName === 'TD') {
        const value = event.target.textContent;

        switch (value) {
          case '=':
            try {
              result.value = eval(result.value);
            } catch (error) {
              result.value = 'Error';
            }
            break;
          case 'C':
            result.value = '';
            break;
          case '×': // Update for multiplication symbol
            result.value += '*';
            break;
          default:
            result.value += value;
            break;
        }
      }
    });
  });

document.addEventListener("keypress", function(e) {
	console.log('key', e.key);
	var input = document.getElementById('result');
	if(input.value == '0' || input.value == 0) {
		input.value = '';
	}
	console.log('pressing');
	e.preventDefault();
	if(e.key === "Enter") {	
		document.getElementById("equal").click();
	} else if(e.key === "1") {
		document.getElementById("one").click();
	}else if(e.key === "2") {	
		document.getElementById("two").click();
	} else if(e.key === "3") {
		document.getElementById("three").click();
	} else if(e.key === "4") {	
		document.getElementById("four").click();
	} else if(e.key === "5") {
		document.getElementById("five").click();
	} else if(e.key === "6") {	
		document.getElementById("six").click();
	} else if(e.key === "7") {
		document.getElementById("seven").click();
	} else if(e.key === "8") {	
		document.getElementById("eight").click();
	} else if(e.key === "9") {
		document.getElementById("nine").click();
	} else if(e.key === "0") {	
		document.getElementById("zero").click();
	} else if(e.key === "+") {
		document.getElementById("plus").click();
	} else if(e.key === "c") {	
		document.getElementById("clear").click();
	} else if(e.key === "*") {	
		document.getElementById("multiply").click();
	} else if(e.key === "/") {
		document.getElementById("divide").click();
	} else if(e.key === "%") {	
		document.getElementById("per").click();
	} else if(e.key === ".") {
		document.getElementById("point").click();
	} else if(e.key === "-") {	
		document.getElementById("minus").click();
	} else if(e.key == "backspace") {
		console.log('backspace pressed');
	} 
});