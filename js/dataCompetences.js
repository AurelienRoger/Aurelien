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

    //Boucle sur les competences Html
    ajoutDataToHtml: function(){
        let listFront = document.querySelector('#ul-FrontEnd')
        for(let i = 0; i < dataCompetences.compFront.length; i++){
        let newLi = document.createElement('li')
        listFront.append(newLi)
        newLi.textContent = dataCompetences.compFront[i]
        }
    },


};

document.addEventListener('DOMContentLoaded', dataCompetences.init);