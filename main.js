document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.querySelector(".calculator");
    const display = calculator.querySelector("input");
    const buttons = calculator.querySelectorAll("button");
  
    buttons.forEach(button => {
      button.addEventListener("click", handleClick);
    });
  
    function handleClick(event) {
      const buttonValue = event.target.textContent;
      
      if (buttonValue === "AC") {
        // Clear the display
        display.value = "";
      } else if (buttonValue === "DEL") {
        // Delete the last character
        display.value = display.value.slice(0, -1);
      } else if (buttonValue === "=") {
        // Evaluate the expression
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else {
        // Append the button value to the display
        display.value += buttonValue;
      }
    }
  });
  
