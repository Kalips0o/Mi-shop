export const openModal = (modal) => {
    // modal.style.display = 'block'

    const layout=document.createElement('div')
    layout.classList.add('modal-backdrop')
    layout.classList.add('fade')
    document.body.append(layout)

    modal.classList.add('d-block')
    setTimeout(() => {
        modal.classList.add('show')
       layout.classList.add('show')
    }, 100)
}

export const closeModal = (modal) => {

    const layout= document.querySelector('.modal-backdrop')
    modal.classList.remove('show')
    layout.classList.remove('show')

    setTimeout(() => {
        modal.classList.remove('d-block')
        layout.remove()
    }, 500)

}
