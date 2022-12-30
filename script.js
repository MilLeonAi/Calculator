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
    }
}



// operate function
function operate(){
    let first_sum = "";
    let second_sum = "";
    let change = false;
    for (let i = 0; i < display.length; i++)
    {
        if (Number.isInteger(display[i]) == false)
        {
            change = true;
        }

        else if (change = false)
        {
            first_sum += display[i];
        }

        else {
            second_sum += display[i]
        }
    }
    console.log(first_sum, second_sum);
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