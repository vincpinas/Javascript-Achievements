let button = document.getElementById('button');
let restartIn = document.getElementById('restartIn');
let stat1 = document.getElementById('stat1');
let stat2 = document.getElementById('stat2');
let stat3 = document.getElementById('stat3');
const numbers = [];


button.addEventListener('click', async () => {
    // Generate 4 random numbers.
    for (let i = 1; i < 4; i++) randomizer(i);
    // Put the 4 random numbers between 1 and 6 in a empty list.
    for (let i = 0; i < 4; i++) numbers.push(randomizer());;

    // save the lowest value in a let variable
    let min_number = Math.min.apply(Math, numbers);
    numbers.pop(min_number);

    // get the rest of the numbers in the array and tel op
    optel = numbers[0] + numbers[1] + numbers[2];
    

    // display the final numbers in HTML
    stat1.innerHTML = "Stats: " + optel;

    // waiting a couple seconds before reloading'
    restartIn.innerHTML = "Reloading in 2.5 Sec";
    await sleep(2500);
    document.location.reload();

})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
// Generate a random number with a minimum of 1 and a maximum of 6
function randomizer(range = 6){ 
    return Math.floor((Math.random() * range)) + 1;
}