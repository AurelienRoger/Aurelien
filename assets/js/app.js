const url = 'http://localhost:8000/api';
console.log('App: Init')

async function addViewCv() {
    let cv = 1
    let id = 1
    let vue = 1
    // On empêche le comportement par défaut (soumission du formulaire)
    const req = await fetch(`${url}/count/${id}`, {
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