
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var items = 16;
var bombs= [];
const numMin = 1;
var numMax;
var qty = numMax - items        // numero di volte che si chiede all'utente di mettere un numero
var userNumbers = [];           // array di numeri che l'utente inserisce
var punteggio = 0;              // punteggio che si incrementa

do {
    var difficulty = prompt('Scegli la difficoltà: Facile | Intermedia | Difficile');
    difficulty = difficulty.toLowerCase();
} while ((difficulty != 'facile' && (difficulty != 'intermedia') && (difficulty != 'difficile')))


switch (difficulty) {
    // con difficoltà 0 => tra 1 e 100
    case 'facile':
        numMax = 100;
        break;
    // con difficoltà 1 => tra 1 e 80
    case 'intermedia':
        numMax = 80;
        break;

    // con difficoltà 2 => tra 1 e 50
    case 'difficile':
        numMax = 50;
        break;
}

console.log(randomGen(numMin, numMax));


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
while(userNumbers.length < qty){
    var numUser = parseInt(prompt('Inserisci un numero tra ' + numMin + ' e ' + numMax));
    console.log(numUser);
    if ((userNumbers.indexOf(numUser) == -1) && (isNaN(numUser) == false) && (numUser >= numMin && numUser <= numMax)){
        userNumbers.push(numUser);
        punteggio += 1;
    }
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    if(bombs.includes(numUser)){
        alert('Hai perso, che peccato!');
        punteggio = punteggio - 1;
        break;
    }
    // La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
    if(userNumbers.length == qty){
        alert('Grande! Hai vinto!!!')
        break
    }
}

console.log(userNumbers);



// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
alert('Il tuo Punteggio: ' + punteggio);



/* FUNCTIONS =%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%  */

function randomGen (min, max){
    while(bombs.length < items) {
        var random = Math.floor(Math.random() * ((max - min + 1)) + 1);
        if(bombs.indexOf(random) == -1 ) {          //se il numero generato randomicamente non è presente nell'array ( == -1), lo pusho 
            bombs.push(random);
        }
    }
    return bombs
}

