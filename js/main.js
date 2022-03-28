const buttonSubmit = document.querySelector('#submit'),
    itens = document.querySelectorAll('.rating-list li')

let indexSelected = null

const selectItem = index => {
    itens[index].classList.add('rating-selected')
    indexSelected = index + 1
}

itens.forEach((item, index) => {
    item.addEventListener('click', () => {
        itens.forEach(({
            classList
        }) => classList.remove('rating-selected'))
        selectItem(index)
    })
})

const submitClick = () => {
    if (indexSelected) {
        document.body.classList.add('submited')
        document.querySelector('.submited-content p').innerHTML = `You selected ${indexSelected} out of 5`
    }
}

buttonSubmit.addEventListener('click', submitClick)