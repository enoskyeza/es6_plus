export class Player {
    constructor(name, country ) {
        this.name = name
        this.country = country
    }

    playerBio() {
        return `${this.name} was born in ${this.country}`
    }
}

export class TennisPlayer extends Player {
    constructor(name, country, age){
        super(name, country)
        this.age = age
    }

    playerBio() {
        return `${this.name} is ${this.age} years old and knows how to play Tennis`
    }
}