function pageLayout() {
    let currentSymbol = 'X'
    const playerOne = document.getElementById('p1')
    const playerTwo = document.getElementById('p2')
    playerOne.innerHTML = `X \n Player 1`
    playerTwo.innerHTML = `O \n Player 2`


    const boxes = document.querySelectorAll('.gridbox')
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            console.log(box.innerHTML.length)
            if (box.innerHTML.length === 0) {
                box.innerHTML = currentSymbol
                currentSymbol === 'O' ? currentSymbol = 'X' : currentSymbol = 'O'
                box.style.color = 'black'
                box.style.fontWeight = 'bold'
                box.style.fontSize = '15vh'
                box.style.fontFamily = 'sans-serif'
                winCheck()
            }
        })
    })
}

function winCheck() {
    //Get all the boxes
    const allBox = document.querySelectorAll('div.gridbox')
    //Check if the the boxes are 3 in a row
    if (allBox[0].innerHTML === allBox[1].innerHTML && allBox[1].innerHTML === allBox[2].innerHTML && allBox[0].innerHTML.length !== 0) {
        //WINNER
        console.log('Top row');
    } else if (allBox[3].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[5].innerHTML && allBox[3].innerHTML.length !== 0) {
        //WINNER
        console.log('Middle row');
    } else if (allBox[6].innerHTML === allBox[7].innerHTML && allBox[7].innerHTML === allBox[8].innerHTML && allBox[6].innerHTML.length !== 0) {
        //WINNER
        console.log('Bottom row');
    } else if (allBox[0].innerHTML === allBox[3].innerHTML && allBox[3].innerHTML === allBox[6].innerHTML && allBox[0].innerHTML.length !== 0) {
        //WINNER
        console.log('L Column ');
    } else if (allBox[1].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[7].innerHTML && allBox[1].innerHTML.length !== 0) {
        //WINNER
        
        console.log('Mid Column ');

    } else if (allBox[2].innerHTML === allBox[5].innerHTML && allBox[5].innerHTML === allBox[8].innerHTML && allBox[2].innerHTML.length !== 0) {
        //WINNER
        console.log('R Column ');

    } else if (allBox[0].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[8].innerHTML && allBox[0].innerHTML.length !== 0) {
        //WINNER
        console.log('L M B ');

    } else if (allBox[2].innerHTML === allBox[4].innerHTML && allBox[4].innerHTML === allBox[6].innerHTML && allBox[2].innerHTML.length !== 0) {
        //WINNER
        console.log('R M B ');

    } 
    console.log(allBox);
}
pageLayout()
