function addTech() {
    const contactSection = document.getElementById('contact-list')
    


    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'

    contactSection.appendChild(nameInput);



    const radioInput = document.createElement('input')
    radioInput.type = 'radio'
    


    contactSection.appendChild(radioInput)


}
