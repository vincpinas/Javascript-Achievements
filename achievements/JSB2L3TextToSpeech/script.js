    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');
    let myChange = document.getElementById('myChange');
    let pitch = randompitch();

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
        document.location.reload();

    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet, pitch); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }

    function randompitch(){ 
        let max = 1.5
        let min = 0.1
        return Math.random() * (+max + 1 - +min) + +min;
    }
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index2];
        let woord2 = werkwoord[index3];
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString, pitch) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[0];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    myChange.addEventListener('click', () => {
        randompitch();
    });
    
    
    const onderwerp = ["He", "Vincent", "The big guy"];
    const werkwoord = ["runs", "codes", "eats"];
    const restwoord = ["at home", "at school", "in the pool"];
        
    let plaatjes = ["img/image0.gif", "img/image1.jpeg", "img/image2.jpeg", "img/image3.jpeg"]
    let arrayLength = onderwerp.length;
