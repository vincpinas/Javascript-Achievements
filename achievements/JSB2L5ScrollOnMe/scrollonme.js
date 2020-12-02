let changetxt = document.getElementById('changingText');
let reset = document.getElementById('resetButton');
let recordclick = document.getElementById('recordclicks');
let output = document.getElementById('output');
let clicks = 0

/* -----------------------------------------
*  Scroll wheel event listener to change text to red and a size of 50px
*  -----------------------------------------
*/
changetxt.addEventListener('wheel', () => {
    changetxt.style.fontSize = "50px";
    changetxt.style.color = "red";
});


/* -----------------------------------------
*  Click event listener on the reset button to change the text back to what it was at load
*  -----------------------------------------
*/
reset.addEventListener('click', () => {
    changetxt.style.fontSize = "18px";
    changetxt.style.color = "black";
});


/* -----------------------------------------
*  Click event listener to record the amount of clicks made on this button
*  -----------------------------------------
*/
recordclick.addEventListener('click', () => {
    clicks += 1;
    let message = "amount of clicks: " + clicks;
    output.innerHTML = message;
})
