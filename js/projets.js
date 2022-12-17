const projets = {

    minValueProjet: 0,
    minValueCommit: 0,
    minValueCafe: 0,

    maxValueProjet: 5,
    maxValueCommit: 100,
    maxValueCafe: 40,

    y: 0,

    classProjet: document.querySelector('.nombre-projets'),
    classCommit: document.querySelector('.nombre-commit'),
    classCafe: document.querySelector('.nombre-cafe'),

    init: function(){
        projets.intervalReq();
    },

    compteurProjet: function(){

        projets.classProjet.textContent = projets.minValueProjet;
        projets.classCommit.textContent = projets.minValueCommit;
        projets.classCafe.textContent = projets.minValueCafe;

        if (projets.minValueProjet < projets.maxValueProjet && projets.y > 1500){
        projets.minValueProjet++;
        }
        else if (projets.minValueCommit < projets.maxValueCommit && projets.y > 1500){
            projets.minValueCommit++;
        }
        else if (projets.minValueCafe < projets.maxValueCafe && projets.y > 1500){
            projets.minValueCafe++;
        }

    },

    intervalReq: function(){

        
        setInterval(function(){
            projets.y = window.scrollY;
            console.log(projets.y);
    }, 10); 

        setInterval(function(){
                projets.compteurProjet();
        }, 50); 
    },
}


document.addEventListener('DOMContentLoaded', projets.init);