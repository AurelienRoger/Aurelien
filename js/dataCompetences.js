const dataCompetences = {

    compFront: [
        'Html',
        'Css',
        'Js',
    ],

    compBack: [
        'Python',
        'Php',
        'MySql',
    ],

    compFramework: [
        'Boostrap',
    ],

    compMobile: [
        'Swift',
    ],

    init:function(){

        dataCompetences.ajoutDataToHtml();
    },

    //Fonction regroupant les fonctions boucle sur data
    ajoutDataToHtml: function(){
        dataCompetences.dataFrontEnd();
        dataCompetences.dataBackEnd();
        dataCompetences.dataFramework();
        dataCompetences.dataMobile();
    },

    //Boucle sur les data competence Front End
    dataFrontEnd: function(){
        let listFront = document.querySelector('#ul-FrontEnd')
        for(let i = 0; i < dataCompetences.compFront.length; i++){
            let newLi = document.createElement('li')
            listFront.append(newLi)
            newLi.textContent = dataCompetences.compFront[i]
        }
    },

    //Boucle sur les data competence Back End
    dataBackEnd: function(){
        let listFront = document.querySelector('#ul-BackEnd')
        for(let i = 0; i < dataCompetences.compFront.length; i++){
            let newLi = document.createElement('li')
            listFront.append(newLi)
            newLi.textContent = dataCompetences.compBack[i]
        }
    },

    //Boucle sur les data competence Framework
    dataFramework: function(){
        let listFront = document.querySelector('#ul-Framework')
        for(let i = 0; i < dataCompetences.compFront.length; i++){
            let newLi = document.createElement('li')
            listFront.append(newLi)
            newLi.textContent = dataCompetences.compFramework[i]
        }
    },

    //Boucle sur les data competence Mobile
    dataMobile: function(){
        let listFront = document.querySelector('#ul-Mobile')
        for(let i = 0; i < dataCompetences.compFront.length; i++){
            let newLi = document.createElement('li')
            listFront.append(newLi)
            newLi.textContent = dataCompetences.compMobile[i]
        }
    },


};

document.addEventListener('DOMContentLoaded', dataCompetences.init);