var items = 5;
var bombs= [];
const numMin = 1;
var numMax;
var userNumbers = [];           // array di numeri che l'utente inserisce
var punteggio = 0;              // punteggio che si incrementa

/* button =%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%=%  */

function selectDiff() {
    var difficulty = document.getElementById('difficoltaList').value;
    document.getElementById('diff').innerHTML = difficulty;
    switch (difficulty) {
        // con difficoltà 0 => tra 1 e 100
        case 'Facile':
            numMax = 10;
            break;
        // con difficoltà 1 => tra 1 e 80
        case 'Intermedia':
        numMax = 80;
        break;
            
        // con difficoltà 2 => tra 1 e 50
        case 'Difficile':
        numMax = 50;
        break;
    }

    console.log(numMax);
    var qty = numMax - items
    bombs = randomGen(numMin, numMax).sort(function(a, b){return a-b});
    console.log(bombs)
    document.getElementById('listPC').innerHTML = bombs;
    document.getElementById('bombs').innerHTML = items;
    document.getElementById('indovina').innerHTML = qty;
    document.getElementById('range').innerHTML = numMin + ' e ' + numMax;
    
    return numMax
}

console.log('max '+ numMax)

function randomGen (min, max){
    while(bombs.length < items) {
        var random = Math.floor(Math.random() * ((max - min + 1)) + 1);
        if(bombs.indexOf(random) == -1 ) {          //se il numero generato randomicamente non è presente nell'array ( == -1), lo pusho
            bombs.push(random);      
        }
    }
    return bombs
}

function sendNumber(){
    do {
        var numUser = document.getElementById('number').value;

        if ((userNumbers.indexOf(numUser) === -1) && (isNaN(numUser) == false) && (numUser >= numMin && numUser <= numMax)){
            userNumbers.push(numUser);
            document.getElementById('user_numbers').innerHTML += '<li>' + numUser + '</li>';
            console.log('usernumbers length' + userNumbers.length)
            punteggio += 1;
            
        }
        // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        if(bombs.includes(numUser)){
            console.log('kabuuum')
            alert('Hai perso, che peccato!');
            punteggio = punteggio - 1;
            break;
        }
        // La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
        if(userNumbers.length == (numMax - items)){
            console.log('vinto')
            alert('Grande! Hai vinto!!!')
            break
        }

        document.getElementById('point').innerHTML = punteggio     
    } while(userNumbers.length < (numMax - items))

    
}


function pushInArray (array, element) {
    return array.push(element);
}

function hide(myID){
   return document.getElementById(myID).style.display = 'none';
}

function show(myID){
    return document.getElementById(myID).style.display = 'block';
}

function reload(){
    return location.reload();
}