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
            display_string += this.textContent;
            display.textContent = display_string;
            } )
    }
    if (button.className == "all-clear")
    {
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
    if (button.className == "")
    {
    }
}



// operate function
function operate(){

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