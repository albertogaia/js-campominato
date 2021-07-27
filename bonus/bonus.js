
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var items = 16;
var bombs= [];
const numMin = 1;
var numMax;
var punteggio = 0;              // punteggio che si incrementa


// do {
    var difficulty = document.getElementById('difficultySelection').value;
    console.log(difficulty)
// } while ((difficulty != '0') && (difficulty != '1') && (difficulty != '2'))

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
                element[0].classList.add('gold');
                document.getElementById('points').innerHTML = punteggio;
                document.getElementById('campo').style.pointerEvents = 'none';
                play_victory();
                document.getElementById('pointsWin').innerHTML = punteggio;
                document.getElementById('punteggio').style.display= 'none';
                document.getElementById('resultsWin').style.display= 'block';
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
                play_sound();
                document.getElementById('points').innerHTML = punteggio; 
                return;
            }

            if(bombs.includes(numUser) == true){
                element[0].classList.add('red');
                play_lose();
                document.getElementById('campo').style.pointerEvents = 'none';
                // punteggio += 0;
                document.getElementById('pointsLost').innerHTML = punteggio;
                document.getElementById('punteggio').style.display= 'none';
                document.getElementById('results').style.display= 'block';
                return;
            }  
        } while(userNumbers.length < qty)
        
    }
    
)




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

function hideBtn(what){
    return document.getElementById(what).style.display = 'none';
}

function reloadPage(){
    return window.location.reload();
}

function startGame(){
    document.getElementById('resetGame').style.display = 'inline-block';
    document.getElementById('campo').style.display = 'block';
    document.getElementById('punteggio').style.display = 'block';
    document.getElementById('difficulty').style.display = 'none';
}

function play_sound() {
    return document.getElementById('myMusic').play();
    
}

function play_lose(){
    return document.getElementById('myMusicLose').play();
}

function play_victory(){
    return document.getElementById('myMusicWin').play();
}

function play_btn(){
    return document.getElementById('myMusicBtn').play();
}