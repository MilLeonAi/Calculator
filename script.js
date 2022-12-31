//intialise all the values
let display_string = "";
//checker for operators
let check = 0;
let display = document.querySelector(".display");
display.textContent = display_string;
let button_list = document.querySelectorAll("button");

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
            enableOperator(button_list);
        } )
    }
    //conditional for clears
    if (button.className == "clear")
    {
        button.addEventListener("click", function(){
            if (isInteger(display_string.slice(-1)) == false)
            {
                if (check > 0)
                {
                    check -= 1;
                }
            }
            display_string = display_string.slice(0, -1);
            display.textContent = display_string;
            console.log(display.textContent)
            if (isInteger(display.textContent.slice(-1)))
            {
                enableOperator(button_list);
            }
            
            
            } )
    }
    if (button.className == "all-clear")
    {
        button.addEventListener("click", function(){
            display_string = "";
            display.textContent = display_string;
            disableOperator(button_list);
            check = 0;
            })
    }
    //conditional for operators;
    if (button.className == "add" || 
        button.className == "subtract" ||
        button.className == "multiply" ||
        button.className == "divide")
    {
        button.addEventListener("click", function(){
            check += 1;
            console.log(check);
            if (check > 1)
            { 
                display_string = operate() + this.textContent;
                console.log(display_string);
                display.textContent = display_string;
                check = 1;
            }
            else{
                display_string += this.textContent;
                display.textContent = display_string;
            }
            
            
            disableOperator(button_list);
            })

    }
    //conditional for equals
    if (button.className == "equal")
    {
        button.addEventListener("click", () => 
        { 
            if (check == 1 && isInteger(display_string.slice(-1)))
            {
                check -= 1;
                display_string = operate();
                display.textContent = display_string;
                enableOperator(button_list);
            }
        } )

    }
}

disableOperator(button_list);



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
        return String(add(first_int, second_int)); 
    }
    else if (operator == "-")
    {
        return String(subtract(first_int, second_int));
    }
    else if (operator == "÷")
    {
        return String(divide(first_int, second_int));
    }
    
    else if (operator == "x")
    {
        return String(multiply(first_int, second_int));
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

function enableOperator(button_list){
    for (let i = 0; i < button_list.length; i++)
    {
        let button = button_list[i];
        if (button.className == "add" || 
        button.className == "subtract" ||
        button.className == "multiply" ||
        button.className == "divide")
        {
            button.disabled = false;
        }
    }

}

function disableOperator(button_list){
    for (let i = 0; i < button_list.length; i++)
    {
        let button = button_list[i];
        if (button.className == "add" || 
        button.className == "subtract" ||
        button.className == "multiply" ||
        button.className == "divide")
        {
            button.disabled = true;
        }
    }
}