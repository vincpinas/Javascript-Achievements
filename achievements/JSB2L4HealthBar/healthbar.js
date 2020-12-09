let hb = document.getElementById("health");
let status = document.getElementById("status");

function drawHealth(){
document.getElementById("button").addEventListener("click",(e)=>{
    hb.value -= 1

    if (hb.value === 0)
    status.innerHTML = "Game Over!"
    })}
