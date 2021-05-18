// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.



let exo1div = document.getElementById('content');
let exo1h1 = document.getElementsByTagName('h1')[0];
let exo1h2 = document.getElementsByTagName('h2')[0];
let exo1p = document.getElementsByTagName('p')[0];

function bordure(e) {
    if (e.target.id == 'content') {
        e.target.style.border = 'black solid 1px';
    }
    
}

function grasRouge(e) {
    e.target.style.color = 'red';
    e.target.style.fontWeight = 'bold';
}

function surligner(e) {
    e.target.style.background = 'yellow';
    // e.target.style.textDecoration = 'none';
}

function effacer(e) {
    e.target.innerText = e.target.innerText.slice(0,-1);
}

exo1div.addEventListener('click', bordure);
exo1h1.addEventListener('click', grasRouge);
exo1h2.addEventListener('click',surligner);
exo1p.addEventListener('click', effacer);


// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 

let newVariable = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let exo2p = document.getElementsByTagName('p')[1];


function changer(e) {
    e.target.innerHTML = newVariable;
}

exo2p.addEventListener('mouseover',changer)


//correction exo2

let sec = document.querySelector('section');
let p2 = document.querySelector('section p');
let variable = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
sec.style.height = "200px";
sec.addEventListener('mouseover',()=>{
    p2.innerText = variable
})