const url = 'https://aurelien-roger.fr/api';
console.log('App: Init')
addViewPage()

async function addViewCv() {
    let req = await fetch(`${url}/count/1`);
    const tasks = await req.json();

    let vue = tasks.vue
    let cv = tasks.cv + 1
    // On empêche le comportement par défaut (soumission du formulaire)
    req = await fetch(`${url}/count/1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vue: vue,
          cv: cv
        })
      });
    
      if (req.status === 200) { // 200 OK
        const count = await req.json(); // On extrait la tâche créée de la réponse
        console.log('Ajout reussi')
      } else {
         console.log('Ajout raté')
      }

}

async function addViewPage() {
    let req = await fetch(`${url}/count/1`);
    const tasks = await req.json();

    let vue = tasks.vue + 1
    let cv = tasks.cv
    // On empêche le comportement par défaut (soumission du formulaire)
    req = await fetch(`${url}/count/1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vue: vue,
          cv: cv
        })
      });
    
      if (req.status === 200) { // 200 OK
        const count = await req.json(); // On extrait la tâche créée de la réponse
        console.log('Ajout reussi')
      } else {
         console.log('Ajout raté')
      }

}

let buttonCv = document.querySelector('#cvButton')
buttonCv.addEventListener('click', addViewCv)