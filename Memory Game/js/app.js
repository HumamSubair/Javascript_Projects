const cardsArray = [
    {
        name : 'dragon',
        icon : '<img class="image" src="img/dragon.png">'
    },
    {
        name : 'fish',
        icon : '<img class="image" src="img/fish.png">'
    },
    {
        name : 'horse',
        icon : '<img class="image" src="img/horse.png">'
    },
    {
        name : 'spider',
        icon : '<img class="image" src="img/spider.png">'
    },
    {
        name : 'dove',
        icon : '<img class="image" src="img/dove.png">'
    },
    {
        name : 'cat',
        icon : '<img class="image" src="img/cat.png">'
    },
    {
        name : 'dragon',
        icon : '<img class="image" src="img/dragon.png">'
    },
    {
        name : 'fish',
        icon : '<img class="image" src="img/fish.png">'
    },
    {
        name : 'horse',
        icon : '<img class="image" src="img/horse.png">'
    },
    {
        name : 'spider',
        icon : '<img class="image" src="img/spider.png">'
    },
    {
        name : 'dove',
        icon : '<img class="image" src="img/dove.png">'
    },
    {
        name : 'cat',
        icon : '<img class="image" src="img/cat.png">'
    }

];

let flippedCards = [];
let matchedPairs = 0;

shuffleCards();
const gameBoard = document.getElementById('gameBoard');
displayCards();


function shuffleCards(){
    for(let i = cardsArray.length-1; i >= 0; i--){
        const randIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]];


    }
}


function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
}

function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    flippedCards.push(this);
    this.classList.remove('cardback');
    this.innerHTML = cardsArray[cardId].icon;

    if (flippedCards.length==2) {
        setTimeout(checkMatch,800);
        
    }

}
}

function checkMatch(){
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');

    if(cardsArray[card1Id].name === cardsArray[card2Id].name ){
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.backgroundColor = 'blanchedalmond';
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.remove('active');
        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor = 'blanchedalmond';
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.remove('active');

        matchedPairs++;
        checkGameOver();
    }else{
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.add('cardback');
    }
    flippedCards = [];
}


function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild)
            
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
    }
}