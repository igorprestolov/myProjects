document.addEventListener("DOMContentLoaded", () => {

    const gameContainer = document.querySelector('.game-container');
    const startBtn = document.getElementById('start-btn')
    const input = document.getElementById('input')
    const startContainer = document.querySelector('.start-container');
    let clickCount = document.querySelector('.count')
    let newArray = new Array();

    function flipCardMove(card) {
        card.classList.toggle('flip');
    }

    function flipCard(card) {
        card.classList.toggle("card_front-face");
        card.classList.toggle("card_back-face");
        card.classList.toggle('card-disabled')
        card.classList.remove('red')
        flipCardMove(card)
    }

    let cardStorageFirst = null;
    let cardStorageSecond = null;

    function createCard() {
        let addCard = document.createElement('div')
        addCard.classList.add("card");
        addCard.classList.add("card_back-face");
        addCard.addEventListener('click', () => {
            +clickCount.textContent++
            if (addCard.classList.contains('card-disabled')) {
                return
            } else {
                if (cardStorageFirst && cardStorageSecond == null) {
                    cardStorageSecond = addCard;
                    flipCard(addCard)
                } else if (cardStorageFirst == null) {
                    cardStorageFirst = addCard;
                    flipCard(addCard)
                }
            }

            if(cardStorageFirst && cardStorageSecond) {
                if (cardStorageFirst.getAttribute('data-number') == cardStorageSecond.getAttribute('data-number')) {
                    cardStorageFirst.classList.add('green')
                    cardStorageSecond.classList.add('green')
                    cardStorageSecond = null;
                    cardStorageFirst = null;
                } else {
                    setTimeout(function () {flipCard(cardStorageSecond); cardStorageSecond = null}, 1000);
                    setTimeout(function () {flipCard(cardStorageFirst); cardStorageFirst = null}, 1000);
                    cardStorageFirst.classList.add('red')
                    cardStorageSecond.classList.add('red')
                }
            }
        })
        return {
            addCard
        }
    }

    startBtn.addEventListener("click", () => {
        let value = +input.value
        if (value >= 4 && value <= 10 && value % 2 == 0) {
            while (value-- > 0) {
                newArray.push(value + 1)
                newArray.push(value + 1)
            }
        } else {
            alert('Введите четное число от 4 до 10');
            newArray = ["1", "1", "2", "2", "3", "3", "4", "4"]
        }

        // Перемешиваем массив
        var i = newArray.length, k, temp;      // k is to generate random index and temp is to swap the values
        while (--i > 0) {
            k = Math.floor(Math.random() * (i + 1));
            temp = newArray[k];
            newArray[k] = newArray[i];
            newArray[i] = temp;
        }

        startContainer.style.display = "none";
        startBtn.style.display = "none";
        document.querySelector('.counter').style.display = "flex";
        let cardRow = +input.value / 2
        let containerWidth = +cardRow * 115 + "px"
        gameContainer.style.width = containerWidth
        for (let i in newArray) {
            let creatingCard = createCard()
            creatingCard.addCard.setAttribute('data-number', newArray[i] + "_")
            gameContainer.append(creatingCard.addCard)
        }
    })
})