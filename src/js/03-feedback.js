const form = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('input[name="email"]')
const inputMessage = document.querySelector('textarea[name="message"]')

const key = {
    email : "",
    message: ""
}


form.addEventListener('input', (e) => {
    key.email = inputEmail.value
    //console.log(key.email)
    key.message = inputMessage.value
    //console.log(key.message)
    const keyString = JSON.stringify(key)//convierto en string
    localStorage.setItem('feedback-form-state', keyString)
})


const currenState = localStorage.getItem("feedback-form-state")
if (currenState != null) { 
    const stateObject = JSON.parse(currenState)//convierto el string en objeto
    inputMessage.textContent = stateObject.message
    inputEmail.textContent = stateObject.email
    console.log(stateObject)

}

console.log(inputEmail.textContent)

form.addEventListener('submit', (e) => {
    localStorage.clear()
 })