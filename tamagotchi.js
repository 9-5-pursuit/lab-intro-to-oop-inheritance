// Create class below
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }

    status() {
        if (this.sick === false) {
            return 
        }
        console.log(`My mood is: ${this.mood} I am this full: ${this.full} My energy is: ${this.energy} I am not sick`)
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
