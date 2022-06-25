function pageLayout() {
   // add event an event listner to the divs
    // let box1 = document.getElementById('1')
    // box1.addEventListener('click', e => {
    //     console.log(1)
    // }) 
    const boxes = document.querySelectorAll('.gridbox')
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            console.log(box.id)
            box.innerHTML = 'x'
        })
    })
}
pageLayout()
