
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var items = 16;
var bombs= [];
const numMin = 1;
var numMax;
// var userNumbers = [];           // array di numeri che l'utente inserisce
var punteggio = 0;              // punteggio che si incrementa



do {
    var difficulty = prompt('Scegli la difficoltà: 0 - Facile | 1 - Intermedia | 2 - Difficile');
} while ((difficulty != '0') && (difficulty != '1') && (difficulty != '2'))

switch (difficulty) {
    // con difficoltà 0 => tra 1 e 100
    case '0':
        numMax = 100;
    break;

    // con difficoltà 1 => tra 1 e 80
    case '1':
        numMax = 80;
    break;
        
    // con difficoltà 2 => tra 1 e 50
    case '2':
        numMax = 50;
    break;
}
var qty = numMax - items;
creaCampo(numMax);
bombs = generateArrayBombs(numMin, numMax);
bombs = bombs.sort((a,b) => a - b)
console.log(bombs)

document.getElementById('campo').addEventListener('click',
    function(e) {
        let numUser = parseInt(e.target.dataset.cella);
        let element = document.querySelectorAll('[data-cella="' + numUser + '"]');
        
        let userNumbers = [];

        do {
            if (punteggio === qty - 1){
                console.log(punteggio + ' punteggio');
                alert('Hai vinto')
                punteggio += 1;
                return;
            }

            if(element[0].classList.contains('green')) {
                punteggio += 0;
                return;
            }

            if ((bombs.includes(numUser) == false)){
            pushInArray(userNumbers, numUser);
            element[0].classList.add('green');
            punteggio += 1;
            console.log(punteggio + ' punteggio'); 
            return;
            }

            if(bombs.includes(numUser) == true){
                element[0].classList.add('red');
                alert('hai perso');
                punteggio += 0;
                console.log(punteggio + ' punteggio'); 
                return;
            }  
        } while(userNumbers.length < qty)
        
    }
    
)


// while(userNumbers.length < items){
//     var numUser = parseInt(prompt('Inserisci un numero tra ' + numMin + ' e ' + numMax));
//     console.log(numUser);
//     if ((userNumbers.indexOf(numUser) == -1) && (isNaN(numUser) == false) && (numUser >= numMin && numUser <= numMax)){
//         pushInArray(userNumbers, numUser);
//         punteggio += 1;
//     }
//     // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//     if(bombs.includes(numUser)){
//         alert('Hai perso, che peccato!');
//         punteggio = punteggio - 1;
//         break;
//     }
//     // La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
//     if(userNumbers.length == qty){
//         alert('Grande! Hai vinto!!!')
//         break
//     }
// }



/* FUNCTIONS =%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%  */

function creaCampo(celle){

    for(let i = 1; i <= celle; i++){
        let cella = `
            <div data-cella="${i}" id="cella">${i}</div>
        `;

        let templateCella = document.createElement('DIV');
        templateCella.classList.add('square');
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

function generateArrayBombs (min, max){
    let bombs = [];
    while(bombs.length < items) {
        var random = Math.floor(Math.random() * ((max - min + 1)) + 1);
        if(bombs.indexOf(random) == -1 ) {          //se il numero generato randomicamente non è presente nell'array ( == -1), lo pusho 
            bombs.push(random);
        }
    }
    return bombs;
}

function pushInArray (array, element) {
    return array.push(element);
}





            
// console.log(randomGen(numMin, numMax));


// alert('Il tuo Punteggio: ' + punteggio);


