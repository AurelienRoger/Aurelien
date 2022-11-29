console.log('app : init');

const changement = document.querySelector('#changement');


let arraySpe = [
    "Réact",
    "Symfony",
    "?",
];

function changeSpe(x){
    changement.textContent = arraySpe[x];
}


setInterval(function(){
    changeSpe(0);
}, 2000);

setInterval(function(){
    changeSpe(1);
}, 4000);

setInterval(function(){
    changeSpe(2);
}, 6000);



