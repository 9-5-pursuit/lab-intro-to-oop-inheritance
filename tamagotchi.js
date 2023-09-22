// Create class below
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }

    status() {

        const sickMessage = this.sick === false ? "I am not sick" : "I am sick";
        
        console.log(`My mood is: ${this.mood} I am this full: ${this.full} My energy is: ${this.energy} ${sickMessage}`);
    }

    eat() {
        this.full += 2
        this.energy--

        if (this.full > 10) {
            this.sick = true
        }
    }

    medicate() {
        if (this.sick === true) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log("Refuses to take medicine");
            this.energy -= 1
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
