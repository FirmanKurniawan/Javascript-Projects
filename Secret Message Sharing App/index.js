const { hash } = window.location
console.log(hash.slice(1))

const message = atob(hash.slice(1))
console.log(message)

if (message) {
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')

    document.querySelector('h1').innerHTML = message
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    const input = document.querySelector('#message-input')
    const encrypted = btoa(input.value)

    const encLink = document.querySelector('#link-input')
    encLink.value = `${window.location}#${encrypted}`
    encLink.select()

    console.log(input.value)
})