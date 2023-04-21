const myModal = document.getElementById('add-category-modal')
const myInput = document.getElementById('add-category-button')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
