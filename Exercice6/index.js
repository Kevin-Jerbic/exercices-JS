const display = document.getElementById('display');

// Function to append the clicked button value to the display
const appendToDisplay = value => {
    display.value += value;
};

// Function to clear the display
const clearDisplay = () => {
    display.value = '';
};

// Function to calculate the result
const calculateResult = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erreur';
    }
};

/*
/!\ Note that the function eval() can be dangerous, it can execute any code passed to it. /!\ 
*/

