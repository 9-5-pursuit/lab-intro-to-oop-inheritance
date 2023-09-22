// Create class below

class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name  = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick  = sick;
        this.rehomed = rehomed;
    }

    greet() {
        if (this.rehomed !== true) {
            console.log(`Hello, I'm ${this.name}`);
        } else {
            console.log(`${this.name} has been rehomed. They can no longer greet you.`)
        } 
    }

    status() {
        if (this.rehomed !== true) {
            console.log(`
            **********
            My mood is: ${this.mood}
            I am this full: ${this.full}
            My energy is: ${this.energy}
            I am ${this.sick ? "sick" : "not sick"}
            **********
            `);
        } else {
            console.log(`${this.name} has been rehomed. They can no longer tell you their status.`)
        } 
    }

    eat() {
        if (this.rehomed !== true) {
            this.full += 2
            this.energy--

            if (this.energy <= 0) {
                this.badGuardian()
            }

            if (this.full > 10) {
                this.sick = true;
            }
        } else {
            console.log(`${this.name} has been rehomed. They can no longer eat.`)
        } 
    }

    medicate() {
        if (this.rehomed !== true) {
            if (this.sick) {
                this.full = 9;
                this.energy -= 3;
            } else {
                console.log("refused to take medicine X(");
                this.energy--;
            }
    
            if (this.energy <= 0) {
                this.badGuardian();
            }
        } else {
            console.log(`${this.name} has been rehomed. They can no longer be medicated.`)
        } 
    }

    play() {
        if (this.rehomed !== true) {
            if (this.sick) {
                console.log("I am too sick to play :P")
                this.mood--;
                this.energy--;
            } else if (this.mood > 9) {
                console.log("mood too high")
                this.energy -= 2;
                this.full--;
            } else if (this.energy <= 3) {
                console.log("I am too tired to play >.<");
                this.energy--;
            } else {
                console.log("I love to play!")
                this.mood += 2;
                this.energy--;
                this.full--;
            }
    
            if (this.energy <= 0 || this.full <= 0) {
                this.badGuardian();
            }
        } else {
            console.log(`${this.name} has been rehomed. They can no longer play.`)
        }

    }

    sleep() {
        if (this.rehomed !== true) {
            this.energy += 4;
            this.full -= 3;
    
            if (this.full <= 0) {
                this.badGuardian();
            }
        } else {
            console.log(`${this.name} has been rehomed. They can no longer sleep.`)
        } 
    }

    timePasses() {
        if (this.sick) {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }

        if (this.energy <= 0 || this.full <= 0 || this.mood <= 0) {
            this.badGuardian();
        }
    }

    badGuardian() {
        console.log("This tamagotchi has been rehomed :(");
        this.rehomed = true;
    }
}

const froggy = new Tamagotchi("Froggy")

froggy.greet()

// Do not edit below this line
module.exports = Tamagotchi;
