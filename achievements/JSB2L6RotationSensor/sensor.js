
// activeer de Device Orientation API
window.addEventListener('deviceorientation', handleOrientation);

// event handler
function handleOrientation(eventData){
    let alpha, beta, gamma;
    // alpha rotation compass rotation Z-axis
    alpha = Math.round(eventData.alpha);
    // beta rotation front back rotation X-axis
    beta = Math.round(eventData.beta);
    // gamma rotation left right rotation Y-axis
    gamma = Math.round(eventData.gamma);
    
    // doe iets met de data
    doSomething(alpha, beta, gamma);     
}   


function doSomething(alpha, beta, gamma){
    showDataColor(alpha, beta, gamma); // kleurtjes en tekst
    activateVoice(alpha, beta, gamma); // geluid
    showMyImage(alpha, beta, gamma);   // afbeelding  
}

function showDataColor(alpha, beta, gamma){
    //show the data in HTML
    document.getElementById('beta').innerHTML = beta;
    document.getElementById('gamma').innerHTML = gamma;
    document.getElementById('alpha').innerHTML = alpha;

    // change background color
     // gamma rotation left right rotation Y-axis
    document.body.style.background = `rgb(150, ${Math.abs(gamma)*5}, 150)`;
}

function activateVoice(alpha, beta, gamma){
    // voice if Z-axis rotation > value
    if(alpha > 120){
        let myTxt = "Stop rotating me you cretin.";  
        sayItLoud(myTxt);
        document.getElementById('voice').innerHTML = myTxt;
        }
    else if (alpha < 120 && gamma > 70) {
        let MyTxt = "Okay, you better stop.";
        sayItLoud(MyTxt);
        document.getElementById('voice').innerHTML = myTxt;
    }
    else{
        // haal de tekst weg
        document.getElementById('voice').innerHTML = "";
        }
}

function showMyImage(alpha, beta, gamma){
    // image if X-axis > value
    if(beta > 60){
        document.getElementById('myImage').src = "pop-smoke-shootforthestarsaimforthemoon-cover.jpg"; // show image
        } else if (beta => 20 && beta <= 80) {
            document.getElementById('myImage').src = "logo.jpg";
        }
        else {
            document.getElementById('myImage').src = ""; // no image
        }
}