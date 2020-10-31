//add divs
for (let i=0;i<6;i++){
    let el=document.createElement("div");
    el.classList.add("card");
    el.setAttribute("id",i+1);
    document.querySelector("main").appendChild(el);
}
//visible card count
let visibleCards = 0;
let visibleCardList = [];
//eventListener
const compareCards = function () {
    let elOne = document.getElementById(visibleCardList[0]),
        elTwo = document.getElementById(visibleCardList[1]);
    
    //if 2 cards are visible and both are the same, delete them
    if (elOne.style.backgroundColor === elTwo.style.backgroundColor) {
        elOne.parentNode.removeChild(elOne);
        elTwo.parentNode.removeChild(elTwo);
    }
    //else if 2 cards are visible and different, make them invisible
    else {
        elOne.style.backgroundColor = "white";
        elTwo.style.backgroundColor = "white";
    }
    visibleCards = 0;
    visibleCardList = [];
}

const showCards = function () {
    if (visibleCards < 2) {
        console.log(this.classList);
        this.style.backgroundColor = this.classList[1];
        visibleCards++;
        visibleCardList.push(this.id);
        console.log(visibleCardList);
        if (visibleCardList.length === 2) {
            setTimeout(compareCards, 3000);
        }
    }
};

//randomly assign each card a color (but not visible)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let cards = document.querySelectorAll("div");
const colors = [["green", 2], ["blue", 2], ["red", 2]];

for (let i = 0; i < 6; i++) {
    console.log("card "+cards[i].classList.length);
while (cards[i].classList.length<2){
    let rando=getRandomInt(0,3);
    if (colors[rando][1]>0){
        cards[i].classList.add(colors[rando][0]);
        colors[rando][1]--;
    }
}
    //add event listener so that each click, as long as no more than 1 card is visible, show a card color
    cards[i].addEventListener("click", showCards);
}