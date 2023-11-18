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
const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
}


// console.log(player.address.city)

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}


// New syntax
const {player_name, club, address: { city } } = player
const {student_name, age, projects: { diceGame }} = student


document.getElementById('des-exp1').textContent = `${player_name} plays for ${club} and stays in ${city}`

function addressMaker(address) {
    const { city, state} = address
    const newAddress = {
        city,
        state,
        country: 'United States'
    };

    // console.log(newAddress)
}

addressMaker({city: 'Austin', state: 'Texas'});


// Destructuring Arrays
let [fName, lName ] = ['James', 'Walker', '32']
console.log(fName)
fName = 'Johhny'
// console.log(fName)


// For of loops
let incomes = [62000, 67000, 75000]
let total = 0

for (const income of incomes) {
    // console.log(income)
    total += income
}
//  console.log(total)

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for (const student of students) {
    const {name, city} = student
    console.log(`${name} lives in ${city}`)
}