// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var messageEl = document.getElementById("message-el");
var cardsEl = document.getElementById("cards-el");
var sumEl = document.getElementById("sum-el");
var playerEl = document.getElementById("player-el");
var startGameBtn = document.getElementById("start-game-btn")
var newCardBtn = document.getElementById("new-card-btn")

let isAlive = false
let hasBlackjack = false
let message = ""
let cards = []
let sum = 0

player = {
    name: "Favour",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips

function randomCard() {
    var random = Math.floor(Math.random() * 13 + 1)
    if (random > 10) {
        return 10
    }
    else if (random === 1) {
        return 11
    }
    else {
        return random
    }
}

function startGame() {
    isAlive = true
    var firstCard = randomCard()
    var secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + " " + sum

    if (sum > 21) {
        message = "You are out of the game!"
        isAlive = false
    }
    else if (sum === 21) {
        message = "You have got Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "Do you want to draw a new card?"
    }

    messageEl.textContent = message
} 

function newCard() {
    if(isAlive === true && hasBlackjack === false) {
        var newCard = randomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}

startGameBtn.addEventListener('click', () => {
    startGame()
})

newCardBtn.addEventListener('click', () => {
    newCard()
})



