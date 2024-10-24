let numberRandom = Math.floor(Math.random()*100)+1;
let getname =document.getElementById('nameplayer');
let getnum =document.getElementById('numplayer');
let mesage =document.getElementById('mesage');
let fondo = document.getElementById('background');
let sound = new Audio('/mp3/aud.mp3');
document.body.style.backgroundImage('/img/bkg2.png');
function checkAns(){
    let name =getname.value;
        
    let numIn= parseInt(getnum.value);
    console.log(getname);
    if(isNaN(numIn)||numIn<1 || numIn>100){
        mesage.textContent='Por favor, introduce un numero valido entre 1 y 100. ';
        return;
    }
    if(numIn === numberRandom){
        mesage.textContent=  name.toUpperCase()+' Felicidades! Has adivinado el numero correcto. !';
        mesage.style.color='green';
        mesage.style.fontSize='4rem';
        sound.play();
        document.body.style.backgroundImage('/img/bkg.png');
        getnum.disabled=true;
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