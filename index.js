// Template literals
// Using string literals to format string output
const firstName = 'Enos'
const secondName = 'Kyeza'
const numOne = 1996
const numTwo = 2023

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
// console.log(fName)
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

/*

Using the For of Loop, iterate through the array and
print into the console, a message like:
Tom lives in Lisbon

*/

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for (const student of students) {
    const {name, city} = student
    // console.log(`${name} lives in ${city}`)
}


// Spread Operator
let contacts = ["Mary", "Joel", "Danny"]

let personalFriends = ['Peter', ...contacts, 'Tayos' ]

// console.log(contacts)
// contacts.push('Allan')
// console.log(contacts)
// console.log(personalFriends)

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

// console.log(employee);

/*
    **** Challenge ****

    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.

    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.

    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it.

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, 'apples', 'sugar']


/* Rest operator

    function add(nums){
        console.log(arguments)
    }

    add(3, 5, 4, 6 ,1)
    returns an object >> { "0": 3, "1": 5, "2": 4, "3": 6, "4": 1 }

    the rest operator returns a string instead
*/

function add(...nums){
    return nums
}

add(3, 5, 4, 6 ,1)

/*
Arrow Functions

    function declaration

        function breakfastMenu() {
            return "I'm going to scrambled eggs for breakfast";
        }

    anonymous function

        const lunchMenu = function() {
            return "I'm going to eat pizza for lunch";
        }
*/

// Arrow function
const dinnerMenu = () => {
    console.log("I'm havinng a burger for dinner today")
}

// No parameter return function
const dinnerMenu1 = () => "I'm havinng a burger for dinner today"

// One parameter return function
const dinnerMenu2 = food => `I'm havinng a ${food} for dinner today`

// More parameters return function, must have parantheses
const dinnerMenu3 = (food, drink) => `I'm havinng a ${food} & ${drink} for dinner today`


/*
Default Parameters

**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const dinnerFood = (food='milk') => {
    console.log(`"I'm going to buy ${food} from the grocery shop"`)
}
dinnerFood('chicken')


/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/


const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if (listIngredients.includes('chocolate')) {
    console.log("We are going to make a chocolate cake")
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
}

/*
Let & Const

if (false) {
    var example = 5;
}

console.log(example)

var example;

if (false) {
    example = 5;
}

 -------

if (false) {
    let example = 5;
}

console.log(example)    -   this throws an error

>> const doesnt work on arrays or on objects

*/

