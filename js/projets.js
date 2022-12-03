const projets = {

    maxValueProjet: 5,
    minValueProjet: 0,
    minValueCommit: 0,
    minValueCafe: 0,
    maxValueCommit: 100,
    maxValueCafe: 40,

    classProjet: document.querySelector('.nombre-projets'),
    classCommit: document.querySelector('.nombre-commit'),
    classCafe: document.querySelector('.nombre-cafe'),


    compteurProjet: function(){

        projets.classProjet.textContent = projets.minValueProjet;
        projets.classCommit.textContent = projets.minValueCommit;
        projets.classCafe.textContent = projets.minValueCafe;

        if (projets.minValueProjet < projets.maxValueProjet){
        projets.minValueProjet++;
        }
        else if (projets.minValueCommit < projets.maxValueCommit){
            projets.minValueCommit++;
        }
        else if (projets.minValueCafe < projets.maxValueCafe){
            projets.minValueCafe++;
        }

    },




}