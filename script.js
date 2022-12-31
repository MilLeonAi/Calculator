//intialise all the values
let display_string = "";
let display = document.querySelector(".display");
display.textContent = display_string;
let button_list = document.querySelectorAll("button");
console.log(button_list[0]);
// loop to add event listeners to buttons
for (let i = 0; i < button_list.length ; i++)
{
    let button = button_list[i];
    //conditional to add numbers
    if (button.className == "number")
    {
        button.addEventListener("click", function(){
            display_string += this.textContent;
            display.textContent = display_string;
        } )
    }
    //conditional for clears
    if (button.className == "clear")
    {
        button.addEventListener("click", function(){
            display_string = display_string.slice(0, -1);
            display.textContent = display_string;
            } )
    }
    if (button.className == "all-clear")
    {
        button.addEventListener("click", function(){
            display_string = "";
            display.textContent = display_string;
            })
    }
    //conditional for operators;
    if (button.className == "add" || 
        button.className == "subtract" ||
        button.className == "multiply" ||
        button.className == "divide")
    {
        button.addEventListener("click", function(){
            display_string += this.textContent;
            display.textContent = display_string;})

    }
    //conditional for equals
    if (button.className == "equal")
    {
        button.addEventListener("click", operate);
        display_string = display.textContent;
    }
}



// operate function
function operate(){
    let first_string = "";
    let second_string = "";
    let operator = ""
    let expression = display.textContent; 
    let change = false;
    //split up the operants and operators
    for (let i = 0; i < expression.length; i++)
    {

        console.log(change);
        console.log(expression[i]);
        console.log(Number.isInteger(expression[i]));
        if (isInteger(expression[i]) == false)
        {
            change = true;
            operator += expression[i];
        }
        else if (change == false){
            first_string += expression[i];
        }
        else{
            second_string += expression[i];
        }
    }
    let first_int = parseInt(first_string);
    let second_int = parseInt(second_string);

    // check for the type of operators
    if (operator == "+")
    {
        display.textContent = add(first_int, second_int);
    }
    else if (operator == "-")
    {
        display.textContent = subtract(first_int, second_int);
    }
    else if (operator == "÷")
    {
        display.textContent = divide(first_int, second_int);
    }
    
    else if (operator == "x")
    {
        display.textContent = multiply(first_int, second_int);
    }
    
}

// operator functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function isInteger(a){
    return /^\d+$/.test(a);
}