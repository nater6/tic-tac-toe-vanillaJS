function pageLayout() {
    const playerOne = document.getElementById('p1')
    const playerTwo = document.getElementById('p2')
    playerOne.innerHTML = `X \n Player 1`
    playerTwo.innerHTML = `O \n Player Two`
    console.log(playerOne, playerTwo);
    console.log('Hello');

    const boxes = document.querySelectorAll('.gridbox')
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            console.log(box.id)
            box.innerHTML = 'x'
            box.style.color = 'white'
            box.style.fontWeight = 'bold'
            box.style.fontSize = '15vh'
            box.style.fontFamily = 'sans-serif'
            
        })
    })
}
pageLayout()
