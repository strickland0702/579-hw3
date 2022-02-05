/*
* Excercise 1
*
*/

const block = document.getElementById("color-block");

block.addEventListener('click', changeColor)

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    const block = document.getElementById("color-block");
    const colorname = document.getElementById("color-name");
    //Write a condition determine what color it should be changed to
    if(colorname.innerText == "#F08080"){

        //change the background color using JS
        block.style.backgroundColor = "#727272"
        //Change the text of the color using the span id color-name
        colorname.innerText = "#727272"
    }
    else{
        //change the background color using JS
        block.style.backgroundColor = "#F08080"
        //Change the text of the color using the span id color-name
        colorname.innerText = "#F08080"

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const btn = document.getElementById("convertbtn");
btn.addEventListener('click', convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const ftemp = document.getElementById("f-input").value
    const ctemp = (ftemp - 32) * 5 / 9;
    document.getElementById('c-output').innerText = ctemp;
    //Send the calculated temperature to HTML

}


