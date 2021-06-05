
// DOM Manipulation 

const body = document.body

body.append("Hello World")

const div = document.createElement('div')
const strong = document.createElement('strong')


strong.innerText = "Hello Wprld 2"

div.append(strong)
div.innerText = " This is the new element"
div.textContent = "This is the text from text content"

body.append(div)