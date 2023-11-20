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


/* Export & Imports */

import { data, addition } from './example.js'

console.log(data)

let updatedData = data

updatedData.push(5)
console.log(updatedData)

/*

**Challenge**

Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;

*/

let sumation = addition(4, 6)
console.log(sumation)

/*
padStart() & padEnd()
    add value to start or end of the string
*/

let example = 'YouTube.com/CodingTutorials360';

// console.log(example.padStart(100));
// console.log(example.padEnd(1));

/*
Classes

class Animal {
    constructor(type, legs) {
        this.type = type
        this.legs = legs
    }

    makeNoise(sound = 'loud noise') {
        console.log(sound)
    }

    get metaData() {
        return `Type: this.type, Legs: this.legs`
    }

    static return10() {         >> works without creating a class instance
        return 10
    }
}

let cat = new Animal('cat', 4)


**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.

*/

import { Player, TennisPlayer } from './player.js'

let player_one = new Player('Messi', 'Argentina')
let player_two = new TennisPlayer('Rafael Nadal', 'India', 34)

console.log(player_one.playerBio())
console.log(player_two.playerBio())


/*
Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;

            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );

*/

const userData = new Promise((resolve, reject) => {
    const error = false;

    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));



/*
/**
 * Fetch - Challenge
 *
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 *
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylansemail310@gmail.com',
            body: 'That was dope!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
*/

/*
Async & Await
const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();

*/


//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // console.log(data.value);
    console.log(data.value);

}

getJoke();