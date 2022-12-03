const choixSpe = {
    speDiff: [
        'React',
        'Symfony',
        '?',
    ],

    x: 0,
    changement: document.querySelector('#changement'),

    init:function(){

        setInterval(choixSpe.compteurSpe, 800);

    },

    compteurSpe: function(){

        if(choixSpe.x < choixSpe.speDiff.length){
            choixSpe.changement.textContent = choixSpe.speDiff[choixSpe.x];
            choixSpe.x++;
        }
        else{
            choixSpe.x = 0;
        }
    },
}

document.addEventListener('DOMContentLoaded', choixSpe.init);