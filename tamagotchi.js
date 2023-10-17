// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false ) {
        this.name = name;
        this.energy = energy; 
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}!`)
    }
    status() {
        console.log(`My mood is: ${this.mood}
        I am this full: ${this.full}
        My energy is: ${this.energy}
        I am not sick`)
    }
    eat() {
        this.full += 2;
        this.energy--;
        if (this.full > 10) {
            this.sick = true
        }
    }
    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log(`${this.name} refused to take medicine.`);
            this.energy--;
        }

    }
    play() {
        if (this.sick) {
            console.log("I am too sick to play.");
            this.mood--;
            this.energy--;
            return;
        }

        if (this.mood >= 9) {
            console.log("I am too happy to play.");
            this.energy -= 2;
            this.full--;
            return;
        }

        if (this.energy <= 3) {
            console.log("I am too tired to play");
            this.energy--;
            return;
        }
        this.mood +=2;
        this.energy--;
        this.full--;
    }
    sleep() {
        this.energy += 4;
        this.full -= 3;
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
