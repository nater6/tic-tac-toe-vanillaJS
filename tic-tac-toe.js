// const func =() => {}
let currentSymbol = 'X'
let turn = 0
function pageLayout() {

    let score = {
        X: 0,
        O: 0
    }

    const boxes = document.querySelectorAll('.gridbox')
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            // console.log(box.innerHTML.length)

            if (box.innerHTML.length === 0) {
                box.innerHTML = currentSymbol
                currentSymbol === 'O' ? currentSymbol = 'X' : currentSymbol = 'O'
                document.getElementById('turn').innerHTML = currentSymbol
                box.style.color = 'black'
                box.style.fontWeight = 'bold'
                box.style.fontSize = '15vh'
                box.style.fontFamily = 'sans-serif'
                turn++
                winCheck(score)
            }

        })
    })
}

function winCheck(scores) {
    //Get all the boxes
    const allBox = document.querySelectorAll('div.gridbox')
    const poScore = document.getElementById('p1Score')
    const ptScore = document.getElementById('p2Score')
    //Check if the the boxes are 3 in a row
    if (allBox[0].innerHTML === allBox[1].innerHTML && allBox[1].innerHTML === allBox[2].innerHTML && allBox[0].innerHTML.length !== 0) {
        //WINNER
        // allBox.forEach(boxes => boxes.innerHTML === '' ? boxes.innerHTML = ' ' : null)
        winner(allBox[0], allBox[1], allBox[2], scores, poScore, ptScore)
        console.log('Top row');
    } else if (allBox[3].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[5].innerHTML && allBox[3].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[3], allBox[4], allBox[5], scores, poScore, ptScore)
        console.log('Middle row');
    } else if (allBox[6].innerHTML === allBox[7].innerHTML && allBox[7].innerHTML === allBox[8].innerHTML && allBox[6].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[6], allBox[7], allBox[8], scores, poScore, ptScore)
        console.log('Bottom row');
    } else if (allBox[0].innerHTML === allBox[3].innerHTML && allBox[3].innerHTML === allBox[6].innerHTML && allBox[0].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[0], allBox[3], allBox[6], scores, poScore, ptScore)
        console.log('L Column ');
    } else if (allBox[1].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[7].innerHTML && allBox[1].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[1], allBox[4], allBox[7], scores, poScore, ptScore)
        console.log('Mid Column ');

    } else if (allBox[2].innerHTML === allBox[5].innerHTML && allBox[5].innerHTML === allBox[8].innerHTML && allBox[2].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[2], allBox[5], allBox[8], scores, poScore, ptScore)
        console.log('R Column ');

    } else if (allBox[0].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[8].innerHTML && allBox[0].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[0], allBox[4], allBox[8], scores, poScore, ptScore)
        console.log('L M B ');

    } else if (allBox[2].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[6].innerHTML && allBox[2].innerHTML.length !== 0) {
        //WINNER
        winner(allBox[2], allBox[4], allBox[6], scores, poScore, ptScore)
        console.log('R M B ');
    } else if (turn === 9) {
        const result = document.getElementById('turn')
        result.innerHTML = 'This game was a draw !'
        setTimeout(reset, 3000)
    }
    // console.log(allBox);
}
function winnerSetting(box1, box2, box3) {
    box1.style.backgroundColor = 'green'
    box2.style.backgroundColor = 'green'
    box3.style.backgroundColor = 'green'
    box1.style.color = 'white'
    box2.style.color = 'white'
    box3.style.color = 'white'
    box1.style.borderColor = '#ffffff00'
    box2.style.borderColor = '#ffffff00'
    box3.style.borderColor = '#ffffff00'
    
}

function valChanger(obj) {
    console.log(obj);
    const players = document.querySelectorAll('.player')
    const playerOnes = document.querySelectorAll(".one")
    const playerTwos = document.querySelectorAll(".two")
    if (obj.O === obj.X) {
        players[0].style.color = 'black'
        players[0].style.borderColor = 'black'
        playerOnes.forEach(o => o.style.color = 'black')
        playerTwos.forEach(o => o.style.color = 'black')
        players[1].style.borderColor = 'black'
        players[1].style.color = 'black'
    } else if (obj.O > obj.X) {
        players[0].style.color = 'red'
        players[0].style.borderColor = 'red'
        playerOnes.forEach(o => o.style.color = 'red')
        playerTwos.forEach(o => o.style.color = 'green')
        players[1].style.color = 'green'
        players[1].style.borderColor = 'green'
    } else if (obj.O < obj.X) {
        players[0].style.color = 'green'
        players[0].style.borderColor = 'green'
        playerOnes.forEach(o => o.style.color = 'green')
        playerTwos.forEach(o => o.style.color = 'red')
        players[1].style.color = 'red'
        players[1].style.borderColor = 'red'
    }
}
function winner(allBox0, allBox1, allBox2, scores, poScore, ptScore) {
    const result = document.getElementById('turn')

    if (allBox0.innerHTML === 'X') {
        scores.X += 1
        poScore.innerHTML = scores.X
        result.innerHTML = 'X Wins !'
    } else if (allBox0.innerHTML === 'O') {
        scores.O += 1
        ptScore.innerHTML = scores.O
        result.innerHTML = 'O Wins !'
    }
    result.style.color = 'green'
    const eachBox = document.querySelectorAll('div.gridbox')
    eachBox.forEach(boxes => boxes.innerHTML === '' ? boxes.innerHTML = ' ' : null)
    winnerSetting(allBox0, allBox1, allBox2)
    valChanger(scores)
    setTimeout(reset, 2500)
}
function reset() {
    //reset boxes
    const everyBox = document.querySelectorAll('div.gridbox')
    everyBox.forEach(box => {
        box.style.backgroundColor = '#ffffff00'
        box.style.color = 'black'
        box.style.borderColor = 'black'
        box.innerHTML = ''
        currentSymbol = 'X'

    })
    const result = document.getElementById('turn')
    currentSymbol = 'X'
    result.innerHTML = currentSymbol
    result.style.color = 'black'
    turn = 0
}

pageLayout()
