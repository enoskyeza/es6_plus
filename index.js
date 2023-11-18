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

// Desctructuring objects
// Old syntax
const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
}

console.log(player.address.city)

// New syntax
const {name, club, address: { city } } = player
document.getElementById('des-exp1').textContent = `${name} plays for ${club} and stays in ${city}`
