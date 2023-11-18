// Template literals
// Using string literals to format string output
const firstName = 'Enos'
const secondName = 'Kyeza'
const numOne = 1996
const numTwo = 2023

let example = document.getElementById('template-exp')

example.textContent = `My name is ${firstName} ${secondName}.
I was born in ${numOne} making me ${numTwo - numOne} years old.
`
