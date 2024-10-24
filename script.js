let numberRandom = Math.floor(Math.random()*100)+1;
let nameplayer =document.getElementById('nameplayer');
let numplayer =document.getElementById('numplayer');
let mesage =document.getElementById('mesage');
let background = document.getElementById('background');
let sound = new Audio('/mp3/bites-ta-da-winner.mp3');

function checkAns(){
    let name=nameplayer.value;
        
    let numIn= parseInt(numplayer.value);
    console.log(numberRandom);
    if(isNaN(numIn)||numIn<1 || numIn>100){
        mesage.textContent='Por favor, introduce un numero valido entre 1 y 100. ';
        return;
    }
    if(numIn === numberRandom){
        mesage.textContent=  name.toUpperCase()+' Felicidades! Has adivinado el numero correcto. !';
        mesage.style.color='white';
        mesage.style.fontSize='4rem';
        sound.play();
        document.body.style.backgroundImage=("url(/img/img2.jpg)");
        numplayer.disabled=true;
    }else if (numIn<numberRandom){
        sound.pause();
        mesage.textContent='El numero es mayor. Intenta nuevamente';
        mesage.style.color='orange';
        mesage.style.fontSize='2rem';
    }else{
        sound.pause();
        mesage.textContent='El numero es menor. Intenta de nuevo';
        mesage.style.color='red';
        mesage.style.fontSize='2rem';
    }
}