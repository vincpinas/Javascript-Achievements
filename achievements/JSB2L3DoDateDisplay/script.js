const dag = document.getElementById("dag")
const maand = document.getElementById("maand")
const jaar = document.getElementById("jaar")
const date = new Date();

function toonDatum(){
    // Schrijf hier jouw code
    dag.innerHTML = date.getDate() + " -"
    maand.innerHTML = date.getMonth()  + 1 + " -"
    jaar.innerHTML = date.getFullYear() 
}

window.addEventListener('DOMContentLoaded', toonDatum);